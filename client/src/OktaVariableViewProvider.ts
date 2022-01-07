import * as vscode from 'vscode';

export class OktaVariableViewProvider implements vscode.WebviewViewProvider {

	public static readonly viewType = 'okta.varsView';

	private _view?: vscode.WebviewView;

	constructor(private readonly _extensionUri: vscode.Uri,) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,

			localResourceRoots: [
				this._extensionUri
			]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
		const dataUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'data.js'));

		// Do the same for the stylesheet.
		const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css'));
		const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css'));
		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));

		return `<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
	
					<!-- DevExtreme theme -->
					<link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/21.2.4/css/dx.light.css">
				
					<!-- DevExtreme library -->
					<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/21.2.4/js/dx.all.js"></script>

					<!--
						Use a content security policy to only allow loading images from https or from our extension directory,
						and only allow scripts that have a specific nonce.
						<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https:; script-src ${webview.cspSource}; style-src ${webview.cspSource};">
					-->
					<meta name="viewport" content="width=device-width, initial-scale=1.0">

					<link href="${styleResetUri}" rel="stylesheet">
					<link href="${styleVSCodeUri}" rel="stylesheet">
					<link href="${styleMainUri}" rel="stylesheet">
					
					<script src="${dataUri}"></script>
					<script src="${scriptUri}"></script>
					<title>Okta VTL Variables</title>
				</head>
				<body class="dx-viewport">
					<div class="demo-container">
						<div id="treeview"></div>
					</div>
				</body>
			</html>`;
	}
}