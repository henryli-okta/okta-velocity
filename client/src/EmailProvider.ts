import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { URL } from "url";
import * as mkdirp from "mkdirp";
import * as http from "http";
import * as https from "https";
import { url } from 'inspector';

export class EmailProvider {
	public static readonly wrongConfiguration = "Wrong Configuration:";
	public static readonly apiPath = "/api/v1/templates/emails/email.welcome/default?language=en";
	public downloadEmails() {
		const configParams = vscode.workspace.getConfiguration('okta');
		let downloadFolder: string | undefined = configParams.get("downloadFolder");
		if (!downloadFolder) {
			vscode.window.showInputBox({ prompt: 'Enter folder you wish to download' }).then((res) => {
				if (!res) {
					vscode.window.showErrorMessage("Please enter valid folder!");
					return;
				}
				downloadFolder = res;
			});
		}
		const downloadPath = path.join(vscode.workspace.workspaceFolders[0].uri.fsPath, downloadFolder);
		
		const orgBaseUrl: string = configParams.get("orgBaseUrl");
		if (!orgBaseUrl) {
			vscode.window.showErrorMessage(EmailProvider.wrongConfiguration, "okta.orgBaseUrl should not be empty!");
			return;
		}
		
		let apiToken: string = configParams.get("apiToken");
		if (!apiToken) {
			vscode.window.showInputBox({ prompt: 'Enter API token for your org' }).then((res) => {
				if (!res) {
					vscode.window.showErrorMessage("Please enter valid API token!");
					return;
				}
				apiToken = res;
			});
		}

		const timeout = 10000;
		const requestUrl = new URL(EmailProvider.apiPath, orgBaseUrl);

		const req = (requestUrl.protocol ==='https:') ? https : http;
		const options = {
			headers: {
				'Accept': 'application/json',
				'Authorization': `SSWS ${apiToken}`
			}
		};
		const request = req.get(requestUrl, options, (res) => {
			res.on('data', (data) => {
				mkdirp(downloadPath, (error) => {
					if (error) {
						vscode.window.showErrorMessage(`Failed to create downlod folder ${downloadPath}! Please check console logs for more details.`);
						console.error(`Failed to create downlod folder ${downloadPath} with error: ${error.message}`);
						return;
					}
				});

				//analyze the json response and create a file.
				const json = JSON.parse(data.toString());
				console.debug("Downlaod template content:", `${json.template}`);

				const fileName = json.type + '.vm';
				try {
					fs.writeFileSync(path.join(downloadPath, fileName), json.template, 'utf8');
				} catch (error) {
					vscode.window.showErrorMessage(`Failed to save ${fileName}! Please check console logs for more details.`);
					console.error(`Failed to save ${fileName} with error: ${error.message}`);
				}
				vscode.window.showInformationMessage("Email downloaded succesfully!");
			});
		});

		request.on('error', (error) => {
			vscode.window.showErrorMessage(`Downloading emails from ${requestUrl} failed! Please check console logs for more details.`);
			console.error(`Downloading emails from ${requestUrl} failed!`, `with error: \n`, `${error.message}`);
		});
	}

}