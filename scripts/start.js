const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
    //mostrar que se ha cargado
    vscode.commands.registerCommand('apuntes.applySettings', () => {
        applySettings();
    });
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
                        "begin": "^[ \t]*[0-9]",
                        "end": "[\n]"
                    },
                    tokenUsedOrange !== "" && {
                        "name": tokenUsedOrange,
                        "begin": "^-+",
                        "end": "[\n]"
                    },
                    tokenUsedYellow !== "" && {
                    "name": tokenUsedYellow,
                      "begin": "\\b[A-Z][A-Za-z0-9]+",
                      "end": "\\b"
                    },
                    tokenUsedGreen !== "" && {
                        "name": tokenUsedGreen,
                        "begin": "\\{",
                        "end": "\\}"
                    },
                    tokenUsedBlue !== "" && {
                        "name": tokenUsedBlue,
                        "begin": "\\b[A-Z][.]",
                        "end": "\\b"
                    },
                    tokenUsedPurple !== "" && {
                        "name": tokenUsedPurple,
                        "begin": "^[ \t]*=+",
                        "end": "\n"
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
