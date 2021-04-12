/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as assert from 'assert';
import * as vscode from 'vscode';
import * as utils from '../utils';

suite('Notebook Document', function () {

	const contentProvider = new class implements vscode.NotebookContentProvider {
		async openNotebook(uri: vscode.Uri, _openContext: vscode.NotebookDocumentOpenContext): Promise<vscode.NotebookData> {
			return {
				cells: [{ cellKind: vscode.NotebookCellKind.Code, source: uri.toString(), language: 'javascript', metadata: new vscode.NotebookCellMetadata(), outputs: [] }],
				metadata: new vscode.NotebookDocumentMetadata()
			};
		}
		async resolveNotebook(_document: vscode.NotebookDocument, _webview: vscode.NotebookCommunication) {
			//
		}
		async saveNotebook(_document: vscode.NotebookDocument, _cancellation: vscode.CancellationToken) {
			//
		}
		async saveNotebookAs(_targetResource: vscode.Uri, _document: vscode.NotebookDocument, _cancellation: vscode.CancellationToken) {
			//
		}
		async backupNotebook(_document: vscode.NotebookDocument, _context: vscode.NotebookDocumentBackupContext, _cancellation: vscode.CancellationToken) {
			return { id: '', delete() { } };
		}
	};

	const disposables: vscode.Disposable[] = [];

	suiteTeardown(async function () {
		utils.assertNoRpc();
		await utils.revertAllDirty();
		await utils.closeAllEditors();
		utils.disposeAll(disposables);
		disposables.length = 0;

		for (let doc of vscode.notebook.notebookDocuments) {
			assert.strictEqual(doc.isDirty, false, doc.uri.toString());
		}
	});

	suiteSetup(function () {
		disposables.push(vscode.notebook.registerNotebookContentProvider('notebook.nbdtest', contentProvider));
	});

	test('cannot register sample provider multiple times', function () {
		assert.throws(() => {
			vscode.notebook.registerNotebookContentProvider('notebook.nbdtest', contentProvider);
		});
	});

	test('cannot open unknown types', async function () {
		try {
			await vscode.notebook.openNotebookDocument(vscode.Uri.parse('some:///thing.notTypeKnown'));
			assert.ok(false);
		} catch {
			assert.ok(true);
		}
	});

	test('document basics', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		const notebook = await vscode.notebook.openNotebookDocument(uri);

		assert.strictEqual(notebook.uri.toString(), uri.toString());
		assert.strictEqual(notebook.isDirty, false);
		assert.strictEqual(notebook.isUntitled, false);
		assert.strictEqual(notebook.cells.length, 1);

		assert.strictEqual(notebook.viewType, 'notebook.nbdtest');
	});

	test('notebook open/close, notebook ready when cell-document open event is fired', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		let didHappen = false;
		const p = utils.asPromise(vscode.workspace.onDidOpenTextDocument).then(doc => {
			if (doc.uri.scheme !== 'vscode-notebook-cell') {
				return;
			}
			const notebook = vscode.notebook.notebookDocuments.find(notebook => {
				const cell = notebook.cells.find(cell => cell.document === doc);
				return Boolean(cell);
			});
			assert.ok(notebook, `notebook for cell ${doc.uri} NOT found`);
			didHappen = true;
		});

		await vscode.notebook.openNotebookDocument(uri);
		await p;
		assert.strictEqual(didHappen, true);
	});

	test('notebook open/close, all cell-documents are ready', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');

		const p = utils.asPromise(vscode.notebook.onDidOpenNotebookDocument).then(notebook => {
			for (let cell of notebook.cells) {
				const doc = vscode.workspace.textDocuments.find(doc => doc.uri.toString() === cell.uri.toString());
				assert.ok(doc);
				assert.strictEqual(doc.notebook === notebook, true);
				assert.strictEqual(doc === cell.document, true);
				assert.strictEqual(doc?.languageId, cell.language);
				assert.strictEqual(doc?.isDirty, false);
				assert.strictEqual(doc?.isClosed, false);
			}
		});

		await vscode.notebook.openNotebookDocument(uri);
		await p;
	});


	test('workspace edit API (replaceCells)', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');

		const document = await vscode.notebook.openNotebookDocument(uri);
		assert.strictEqual(document.cells.length, 1);

		// inserting two new cells
		{
			const edit = new vscode.WorkspaceEdit();
			edit.replaceNotebookCells(document.uri, 0, 0, [{
				cellKind: vscode.NotebookCellKind.Markdown,
				language: 'markdown',
				metadata: undefined,
				outputs: [],
				source: 'new_markdown'
			}, {
				cellKind: vscode.NotebookCellKind.Code,
				language: 'fooLang',
				metadata: undefined,
				outputs: [],
				source: 'new_code'
			}]);

			const success = await vscode.workspace.applyEdit(edit);
			assert.strictEqual(success, true);
		}

		assert.strictEqual(document.cells.length, 3);
		assert.strictEqual(document.cells[0].document.getText(), 'new_markdown');
		assert.strictEqual(document.cells[1].document.getText(), 'new_code');

		// deleting cell 1 and 3
		{
			const edit = new vscode.WorkspaceEdit();
			edit.replaceNotebookCells(document.uri, 0, 1, []);
			edit.replaceNotebookCells(document.uri, 2, 3, []);
			const success = await vscode.workspace.applyEdit(edit);
			assert.strictEqual(success, true);
		}

		assert.strictEqual(document.cells.length, 1);
		assert.strictEqual(document.cells[0].document.getText(), 'new_code');

		// replacing all cells
		{
			const edit = new vscode.WorkspaceEdit();
			edit.replaceNotebookCells(document.uri, 0, 1, [{
				cellKind: vscode.NotebookCellKind.Markdown,
				language: 'markdown',
				metadata: undefined,
				outputs: [],
				source: 'new2_markdown'
			}, {
				cellKind: vscode.NotebookCellKind.Code,
				language: 'fooLang',
				metadata: undefined,
				outputs: [],
				source: 'new2_code'
			}]);
			const success = await vscode.workspace.applyEdit(edit);
			assert.strictEqual(success, true);
		}
		assert.strictEqual(document.cells.length, 2);
		assert.strictEqual(document.cells[0].document.getText(), 'new2_markdown');
		assert.strictEqual(document.cells[1].document.getText(), 'new2_code');

		// remove all cells
		{
			const edit = new vscode.WorkspaceEdit();
			edit.replaceNotebookCells(document.uri, 0, document.cells.length, []);
			const success = await vscode.workspace.applyEdit(edit);
			assert.strictEqual(success, true);
		}
		assert.strictEqual(document.cells.length, 0);
	});

	test('workspace edit API (replaceCells, event)', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		const document = await vscode.notebook.openNotebookDocument(uri);
		assert.strictEqual(document.cells.length, 1);

		const edit = new vscode.WorkspaceEdit();
		edit.replaceNotebookCells(document.uri, 0, 0, [{
			cellKind: vscode.NotebookCellKind.Markdown,
			language: 'markdown',
			metadata: undefined,
			outputs: [],
			source: 'new_markdown'
		}, {
			cellKind: vscode.NotebookCellKind.Code,
			language: 'fooLang',
			metadata: undefined,
			outputs: [],
			source: 'new_code'
		}]);

		const event = utils.asPromise<vscode.NotebookCellsChangeEvent>(vscode.notebook.onDidChangeNotebookCells);

		const success = await vscode.workspace.applyEdit(edit);
		assert.strictEqual(success, true);

		const data = await event;

		// check document
		assert.strictEqual(document.cells.length, 3);
		assert.strictEqual(document.cells[0].document.getText(), 'new_markdown');
		assert.strictEqual(document.cells[1].document.getText(), 'new_code');

		// check event data
		assert.strictEqual(data.document === document, true);
		assert.strictEqual(data.changes.length, 1);
		assert.strictEqual(data.changes[0].deletedCount, 0);
		assert.strictEqual(data.changes[0].deletedItems.length, 0);
		assert.strictEqual(data.changes[0].items.length, 2);
		assert.strictEqual(data.changes[0].items[0], document.cells[0]);
		assert.strictEqual(data.changes[0].items[1], document.cells[1]);
	});

	test('workspace edit API (appendNotebookCellOutput, replaceCellOutput, event)', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		const document = await vscode.notebook.openNotebookDocument(uri);

		const outputChangeEvent = utils.asPromise<vscode.NotebookCellOutputsChangeEvent>(vscode.notebook.onDidChangeCellOutputs);
		const edit = new vscode.WorkspaceEdit();
		const firstCellOutput = new vscode.NotebookCellOutput([new vscode.NotebookCellOutputItem('foo', 'bar')]);
		edit.appendNotebookCellOutput(document.uri, 0, [firstCellOutput]);
		const success = await vscode.workspace.applyEdit(edit);
		const data = await outputChangeEvent;

		assert.strictEqual(success, true);
		assert.strictEqual(document.cells.length, 1);
		assert.strictEqual(document.cells[0].outputs.length, 1);
		assert.deepStrictEqual(document.cells[0].outputs, [firstCellOutput]);

		assert.strictEqual(data.document === document, true);
		assert.strictEqual(data.cells.length, 1);
		assert.strictEqual(data.cells[0].outputs.length, 1);
		assert.deepStrictEqual(data.cells[0].outputs, [firstCellOutput]);


		{
			const outputChangeEvent = utils.asPromise<vscode.NotebookCellOutputsChangeEvent>(vscode.notebook.onDidChangeCellOutputs);
			const edit = new vscode.WorkspaceEdit();
			const secondCellOutput = new vscode.NotebookCellOutput([new vscode.NotebookCellOutputItem('foo', 'baz')]);
			edit.appendNotebookCellOutput(document.uri, 0, [secondCellOutput]);
			const success = await vscode.workspace.applyEdit(edit);
			const data = await outputChangeEvent;

			assert.strictEqual(success, true);
			assert.strictEqual(document.cells.length, 1);
			assert.strictEqual(document.cells[0].outputs.length, 2);
			assert.deepStrictEqual(document.cells[0].outputs, [firstCellOutput, secondCellOutput]);

			assert.strictEqual(data.document === document, true);
			assert.strictEqual(data.cells.length, 1);
			assert.strictEqual(data.cells[0].outputs.length, 2);
			assert.deepStrictEqual(data.cells[0].outputs, [firstCellOutput, secondCellOutput]);
		}

		{
			const outputChangeEvent = utils.asPromise<vscode.NotebookCellOutputsChangeEvent>(vscode.notebook.onDidChangeCellOutputs);
			const edit = new vscode.WorkspaceEdit();
			const thirdOutput = new vscode.NotebookCellOutput([new vscode.NotebookCellOutputItem('foo', 'baz1')]);
			edit.replaceNotebookCellOutput(document.uri, 0, [thirdOutput]);
			const success = await vscode.workspace.applyEdit(edit);
			const data = await outputChangeEvent;

			assert.strictEqual(success, true);
			assert.strictEqual(document.cells.length, 1);
			assert.strictEqual(document.cells[0].outputs.length, 1);
			assert.deepStrictEqual(document.cells[0].outputs, [thirdOutput]);

			assert.strictEqual(data.document === document, true);
			assert.strictEqual(data.cells.length, 1);
			assert.strictEqual(data.cells[0].outputs.length, 1);
			assert.deepStrictEqual(data.cells[0].outputs, [thirdOutput]);
		}
	});

	test('document save API', async function () {
		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		const notebook = await vscode.notebook.openNotebookDocument(uri);

		assert.strictEqual(notebook.uri.toString(), uri.toString());
		assert.strictEqual(notebook.isDirty, false);
		assert.strictEqual(notebook.isUntitled, false);
		assert.strictEqual(notebook.cells.length, 1);
		assert.strictEqual(notebook.viewType, 'notebook.nbdtest');

		const edit = new vscode.WorkspaceEdit();
		edit.replaceNotebookCells(notebook.uri, 0, 0, [{
			cellKind: vscode.NotebookCellKind.Markdown,
			language: 'markdown',
			metadata: undefined,
			outputs: [],
			source: 'new_markdown'
		}, {
			cellKind: vscode.NotebookCellKind.Code,
			language: 'fooLang',
			metadata: undefined,
			outputs: [],
			source: 'new_code'
		}]);

		const success = await vscode.workspace.applyEdit(edit);
		assert.strictEqual(success, true);
		assert.strictEqual(notebook.isDirty, true);

		await notebook.save();
		assert.strictEqual(notebook.isDirty, false);
	});


	test('setTextDocumentLanguage for notebook cells', async function () {

		const uri = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		const notebook = await vscode.notebook.openNotebookDocument(uri);
		const first = notebook.cells[0];
		assert.strictEqual(first.document.languageId, 'javascript');

		const pclose = utils.asPromise(vscode.workspace.onDidCloseTextDocument);
		const popen = utils.asPromise(vscode.workspace.onDidOpenTextDocument);

		await vscode.languages.setTextDocumentLanguage(first.document, 'css');
		assert.strictEqual(first.document.languageId, 'css');

		const closed = await pclose;
		const opened = await popen;

		assert.strictEqual(closed.uri.toString(), first.uri.toString());
		assert.strictEqual(opened.uri.toString(), first.uri.toString());
		assert.strictEqual(opened === closed, true);
	});


	test('#117273, Add multiple outputs', async function () {

		const resource = await utils.createRandomFile(undefined, undefined, '.nbdtest');
		const document = await vscode.notebook.openNotebookDocument(resource);

		const edit = new vscode.WorkspaceEdit();
		edit.replaceNotebookCellOutput(document.uri, 0, [
			new vscode.NotebookCellOutput(
				[new vscode.NotebookCellOutputItem('application/x.notebook.stream', '1', { outputType: 'stream', streamName: 'stdout' })],
				{ outputType: 'stream', streamName: 'stdout' }
			)
		]);
		let success = await vscode.workspace.applyEdit(edit);

		assert.ok(success);
		assert.strictEqual(document.cells[0].outputs.length, 1);
		assert.strictEqual(document.cells[0].outputs[0].outputs.length, 1);
		assert.deepStrictEqual(document.cells[0].outputs[0].metadata, { outputType: 'stream', streamName: 'stdout' });
		assert.deepStrictEqual(document.cells[0].outputs[0].outputs[0].metadata, { outputType: 'stream', streamName: 'stdout' });

		const edit2 = new vscode.WorkspaceEdit();
		edit2.appendNotebookCellOutput(document.uri, 0, [
			new vscode.NotebookCellOutput(
				[new vscode.NotebookCellOutputItem('hello', '1', { outputType: 'stream', streamName: 'stderr' })],
				{ outputType: 'stream', streamName: 'stderr' }
			)
		]);
		success = await vscode.workspace.applyEdit(edit2);
		assert.ok(success);

		assert.strictEqual(document.cells[0].outputs.length, 2);
		assert.strictEqual(document.cells[0].outputs[0].outputs.length, 1);
		assert.strictEqual(document.cells[0].outputs[1].outputs.length, 1);
		assert.deepStrictEqual(document.cells[0].outputs[0].metadata, { outputType: 'stream', streamName: 'stdout' });
		assert.deepStrictEqual(document.cells[0].outputs[0].outputs[0].metadata, { outputType: 'stream', streamName: 'stdout' });
		assert.deepStrictEqual(document.cells[0].outputs[1].metadata, { outputType: 'stream', streamName: 'stderr' });
		assert.deepStrictEqual(document.cells[0].outputs[1].outputs[0].metadata, { outputType: 'stream', streamName: 'stderr' });
	});
});
