/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const vscode = acquireVsCodeApi();

vscode.postMessage({
	type: 'custom_renderer_initialize',
	payload: {
		firstMessage: true
	}
});

const notebook = acquireNotebookRendererApi('notebookCoreTestRenderer');

notebook.onDidCreateOutput(({ element, mimeType }) => {
	const div = document.createElement('div');
	div.innerText = `Hello ${mimeType}!`;
	element.appendChild(div);
});
