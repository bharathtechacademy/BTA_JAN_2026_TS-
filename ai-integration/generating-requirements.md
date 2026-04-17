# Generating the requirements from the application. (Step By Step)

## Step 1

We need to add Playwright MCP Server configuration within the VS Code. 

Add Playwright MCP Extension : https://playwright.dev/docs/getting-started-mcp

Project Folder -> .vscode -> mcp.json -> add playwright mcp server

** mcp.json **

{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}


## Step 2
Add custom agent to launch the application and, by using play rate MCP, prepare the requirements in a markdown file. 

Project folder -> .github -> agents -> qa-requirements-gen-agent.agent.md