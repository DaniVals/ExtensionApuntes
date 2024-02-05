const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {

    //revisar si se acaba de istalar o se ha actualizado
    const extensionVersion = context.globalState.get('extensionVersion');
    const currentVersion = vscode.extensions.getExtension('DanielValsSimon.apuntes').packageJSON.version;
    if (!extensionVersion || extensionVersion !== currentVersion) {
        addSettings();
        context.globalState.update('extensionVersion', currentVersion);
    }
    
    //comando para reescribir apuntes.tmLanguage.json
    vscode.commands.registerCommand('apuntes.applySettings', () => {
        applySettings();
    });
}
function addSettings(){
    vscode.window.showInformationMessage('The extension "apuntes" has been updated')
    /*
        const configuration = vscode.workspace.getConfiguration();

        // Define the scope and color values
        const scope = "ssssss";
        const color = "#FF0000";

        // Get the existing value of editor.tokenColorCustomizations.textMateRules
        let existingRules = configuration.get('editor.tokenColorCustomizations.textMateRules', []);

        // Check if the specified scope is already present
        const existingRuleIndex = existingRules.findIndex(rule => rule.scope === scope);

        if (existingRuleIndex !== -1) {
            // If the scope is already present, update its color
            existingRules[existingRuleIndex].settings.foreground = color;

            // Update the user's settings with the modified rule
            configuration.update('editor.tokenColorCustomizations.textMateRules', existingRules, vscode.ConfigurationTarget.Global);

            vscode.window.showInformationMessage(`Updated color for scope '${scope}'.`);
        } else {
            // If the scope is not present, add a new rule with the scope and color
            existingRules.push({
                "scope": scope,
                "settings": {
                    "foreground": color
                }
            });

            // Update the user's settings with the new rule
            configuration.update('editor.tokenColorCustomizations.textMateRules', existingRules, vscode.ConfigurationTarget.Global);

            vscode.window.showInformationMessage(`Added color for scope '${scope}'.`);
        }
    });

    context.subscriptions.push(disposable);
    */
}

function applySettings(){
    
    vscode.window.showInformationMessage('Aplicando cambios');
    //crear el archivo
    const apuntesConfig = vscode.workspace.getConfiguration('apuntes');

    const tokenUsedGrey = apuntesConfig.get('tokenUsed.grey', 'comment');
    const tokenUsedRed = apuntesConfig.get('tokenUsed.red', 'constant.numeric');
    const tokenUsedOrange = apuntesConfig.get('tokenUsed.orange', 'string');
    const tokenUsedYellow = apuntesConfig.get('tokenUsed.yellow', 'support.function');
    const tokenUsedGreen = apuntesConfig.get('tokenUsed.green', 'entity.name.type');
    const tokenUsedBlue = apuntesConfig.get('tokenUsed.blue', 'variable');
    const tokenUsedPurple = apuntesConfig.get('tokenUsed.purple', 'keyword.control');
    //apuntesConfig.update('tokenUsed.purple','prueba',true)

    const configRaw = {
        "$schema": "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
            "scopeName": "source.apuntes",
            "name": "apuntes",
            "patterns": [
                    tokenUsedGrey !== "" && {
                        "name": tokenUsedGrey,
                        "begin": "\\((?![ \t])",
                        "end": "[\\)\n]"
                    },
                    {
                        "name": "tag.square-brackets",
                        "begin": "\\[",
                        "end": "\\]",
                        "beginCaptures": 
                        {
                            "0": { "name": "punctuation.definition.tag.begin" }
                        },
                        "endCaptures": 
                        {
                            "0": { "name": "punctuation.definition.tag.end" }
                        },
                        "patterns": [
                        {
                            "name": "content.between-brackets",
                            "match": "([^\\[\\]]+)",
                            "captures": {
                            "1": { "name": "strong" }
                            }
                        }]
                    },
                    tokenUsedRed !== "" && {
                        "name": tokenUsedRed,
                        "begin": "^[ \t]*[0-9]+.[^0-9]",
                        "end": "[\n]"
                    },
                    tokenUsedOrange !== "" && {
                        "name": tokenUsedOrange,
                        "begin": "\\{",
                        "end": "\\}"
                    },
                    tokenUsedYellow !== "" && {
                        "name": tokenUsedYellow,
                        "begin": "^[ \t]*[0-9]+.[0-9]+\\b",
                        "end": "[\n]"
                    },
                    tokenUsedGreen !== "" && {
                        "name": tokenUsedGreen,
                        "match": "^[ \t]*[-><]"
                    },
                    tokenUsedBlue !== "" && {
                        "name": tokenUsedBlue,
                        "begin": "\\b[A-ZÑ][.]",
                        "end": "[\\b\n]"
                    },
                    tokenUsedPurple !== "" && {
                        "name": tokenUsedPurple,
                        "begin": "^[ \t]*=+",
                        "end": "[=+\\n]"
                    }
              ].filter(Boolean)
    };
    const rutaArchivo = path.join(__dirname, '..', 'syntaxes', 'apuntes.tmLanguage.json');
    const configFile = JSON.stringify(configRaw, null, 2);
    
    // Escribir en el archivo
    try{
        fs.writeFileSync(rutaArchivo, configFile);
        vscode.window.showInformationMessage('Cambios aplicados con exito, reiniciando ventana');
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    } catch (error) {
        vscode.window.showErrorMessage(`Error writing file: ${error.message}`);
    }
}
exports.activate = activate;
