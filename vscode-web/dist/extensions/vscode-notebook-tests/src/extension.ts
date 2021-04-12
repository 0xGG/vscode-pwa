/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as path from 'path';

function wait(ms: number): Promise<void> {
	return new Promise(r => setTimeout(r, ms));
}

export function activate(context: vscode.ExtensionContext): any {
	context.subscriptions.push(vscode.commands.registerCommand('vscode-notebook-tests.createNewNotebook', async () => {
		const workspacePath = vscode.workspace.workspaceFolders![0].uri.fsPath;
		const notebookPath = path.join(workspacePath, 'test.smoke-nb');
		child_process.execSync('echo \'\' > ' + notebookPath);
		await wait(500);
		await vscode.commands.executeCommand('vscode.open', vscode.Uri.file(notebookPath));
	}));

	context.subscriptions.push(vscode.notebook.registerNotebookContentProvider('notebookSmokeTest', {
		openNotebook: async (_resource: vscode.Uri) => {
			const dto: vscode.NotebookData = {
				metadata: new vscode.NotebookDocumentMetadata(),
				cells: [
					{
						source: 'code()',
						language: 'typescript',
						cellKind: vscode.NotebookCellKind.Code,
						outputs: [],
						metadata: new vscode.NotebookCellMetadata().with({ custom: { testCellMetadata: 123 } })
					},
					{
						source: 'Markdown Cell',
						language: 'markdown',
						cellKind: vscode.NotebookCellKind.Markdown,
						outputs: [],
						metadata: new vscode.NotebookCellMetadata().with({ custom: { testCellMetadata: 123 } })
					}
				]
			};

			return dto;
		},
		resolveNotebook: async (_document: vscode.NotebookDocument) => {
			return;
		},
		saveNotebook: async (_document: vscode.NotebookDocument, _cancellation: vscode.CancellationToken) => {
			return;
		},
		saveNotebookAs: async (_targetResource: vscode.Uri, _document: vscode.NotebookDocument, _cancellation: vscode.CancellationToken) => {
			return;
		},
		backupNotebook: async (_document: vscode.NotebookDocument, _context: vscode.NotebookDocumentBackupContext, _cancellation: vscode.CancellationToken) => {
			return {
				id: '1',
				delete: () => { }
			};
		}
	}));

	const kernel: vscode.NotebookKernel = {
		label: 'notebookSmokeTest',
		isPreferred: true,
		executeAllCells: async (_document: vscode.NotebookDocument) => {
			const edit = new vscode.WorkspaceEdit();
			for (let i = 0; i < _document.cells.length; i++) {
				edit.replaceNotebookCellOutput(_document.uri, i, [new vscode.NotebookCellOutput([
					new vscode.NotebookCellOutputItem('text/html', ['test output'], undefined)
				])]);
			}

			await vscode.workspace.applyEdit(edit);
		},
		cancelAllCellsExecution: async () => { },
		executeCell: async (_document: vscode.NotebookDocument, _cell: vscode.NotebookCell | undefined) => {
			if (!_cell) {
				_cell = _document.cells[0];
			}

			const edit = new vscode.WorkspaceEdit();
			edit.replaceNotebookCellOutput(_document.uri, _cell.index, [new vscode.NotebookCellOutput([
				new vscode.NotebookCellOutputItem('text/html', ['test output'], undefined)
			])]);
			await vscode.workspace.applyEdit(edit);
			return;
		},
		cancelCellExecution: async () => { }
	};

	context.subscriptions.push(vscode.notebook.registerNotebookKernelProvider({ filenamePattern: '*.smoke-nb' }, {
		provideKernels: async () => {
			return [kernel];
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('vscode-notebook-tests.debugAction', async (cell: vscode.NotebookCell) => {
		if (cell) {
			const edit = new vscode.WorkspaceEdit();
			const fullRange = new vscode.Range(0, 0, cell.document.lineCount - 1, cell.document.lineAt(cell.document.lineCount - 1).range.end.character);
			edit.replace(cell.document.uri, fullRange, 'test');
			await vscode.workspace.applyEdit(edit);
		} else {
			throw new Error('Cell not set correctly');
		}
	}));
}
