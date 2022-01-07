import { pathToFileURL } from 'url';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { tmpdir } from 'os';
import * as Velocity from 'velocityjs';


export class VTLProvider {
	private previewPanel: vscode.WebviewPanel;
	private sourceUri: vscode.Uri; 

	public constructor (private context: vscode.ExtensionContext) {
	}

	public async initPreview (
		sourceUri: vscode.Uri,
		editor: vscode.TextEditor,
		viewOptions: { viewColumn: vscode.ViewColumn; preserveFocus?: boolean}
	) {
		if (this.previewPanel) {
			const oldResourceRoot = this.getProjectDirectoryPath(this.sourceUri) || path.dirname(this.sourceUri.fsPath);
			const newResourceRoot = this.getProjectDirectoryPath(sourceUri) || path.dirname(sourceUri.fsPath);

			if (oldResourceRoot !== newResourceRoot) {
				// Dispose the previous one if not the same
				this.previewPanel.dispose();
			}
		} else {
			//crate a new preview panel
			const localResourceRoots = [
				vscode.Uri.file(this.context.extensionPath),
				vscode.Uri.file(tmpdir()),
				vscode.Uri.file(this.getProjectDirectoryPath(sourceUri) || path.dirname(sourceUri.fsPath))
			];
	
			this.previewPanel = vscode.window.createWebviewPanel(
				'velocityPreview', // Identifies the type of the webview. Used internally
				'Okta VLT Preview', // Title of the panel displayed to the user
				viewOptions, // Editor column to show the new webview panel in.
				{
					// Webview options.
					localResourceRoots
				} 
			);
			this.sourceUri = sourceUri;
	
			// unregister previewPanel
			this.previewPanel.onDidDispose(
				() => {
					this.previewPanel = undefined;
					this.sourceUri = undefined; 
				},
				null,
				this.context.subscriptions,
			);
	
			this.previewPanel.title = `Preview ${path.basename(sourceUri.fsPath)}`;
		}

		// Update HTML content to the latest code in active editor
		this.previewPanel.webview.html = this.getWebviewContent(editor);
	}

	public getWebviewContent(editor: vscode.TextEditor): string {
		const vm = editor.document.getText();
		const oktaContext = VTLProvider.getOktaContext();
		const htmlContent = Velocity.render(vm, oktaContext);
		console.log("After render: ", htmlContent);
		return htmlContent;
	}

	public static getOktaContext() {
		return {
			customer: {
				address: 'bar',
				Address: 'foo'
			}
		};
	}

	private getProjectDirectoryPath(sourceUri: vscode.Uri) {
		const workspaceFolder = vscode.workspace.workspaceFolders;
		const possibleWorkspaceFolders = workspaceFolder.filter(
			(folder) => { 
				return path.dirname(sourceUri.path.toUpperCase()).indexOf(folder.uri.path.toUpperCase()) >= 0;
			}
		);

		let projectDirectoryPath: string;
		if (possibleWorkspaceFolders.length) {
			// We pick the workspaceUri that has the longest path
			const workspaceFolder = possibleWorkspaceFolders.sort((x, y) => y.uri.fsPath.length - x.uri.fsPath.length)[0];
			projectDirectoryPath = workspaceFolder.uri.fsPath;
		} else {
			projectDirectoryPath = "";
		}

		return this.formatPathIfNecessary(projectDirectoryPath);
	}

	/**
   	 * Format pathString if it is on Windows. Convert `c:\` like string to `C:\`
     * @param pathString
     */
	private formatPathIfNecessary(pathString: string) {
		if (process.platform === "win32") {
			pathString = pathString.replace(
			/^([a-zA-Z]):\\/,
			(_, $1) => `${$1.toUpperCase()}:\\`,
			);
		}
		return pathString;
	}
}