# Chat
extensions for vs code: 
-Highlight Matching Tag
-Auto Rename Tag
-VSCode React Refactor
-ES7+ React/Redux/React-Native snippets
-ESLint
-npm Intellisense
-TabOut
eslint configuration https://dev.to/ziker22/ultimate-vs-code-react-typescript-code-quality-setup-2020-29gm


edit setting.json for eslint in vs code for auto fix after save
{
    "git.autofetch": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "eslint.alwaysShowStatus": true,
    "eslint.run": "onSave",
    "eslint.trace.server": "off",
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}