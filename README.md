# MCP Config Path

A Python utility to get the configuration file path for various MCP (Multi-Client Platform) clients, such as Claude Desktop, Cline, Cursor, VSCode, and more. This library helps you locate the config file for each supported client on your system.

## Features
- Supports multiple clients: Claude Desktop, Cline, Roo Code, Claude Code, VSCode, Cursor, mcphub.nvim, windsurf, mcplinker, and more.
- Cross-platform support (macOS, Windows, Linux where applicable).
- Simple API to get the config path by client name.

## Supported Clients
| Name           | Description / Path Example |
|----------------|---------------------------|
| claude_desktop | Claude Desktop config      |
| cline          | Cline extension for VSCode |
| roo_code       | Roo Code extension         |
| claude_code    | Claude Code extension      |
| vscode         | VSCode extension           |
| cursor         | Cursor editor extension    |
| mcphub.nvim    | mcphub.nvim Neovim plugin  |
| windsurf       | Codeium windsurf           |
| mcplinker      | mcplinker tool             |
| (other)        | Defaults to `mcp.json`     |

## Installation

```bash
uv pip install mcp-config-path
```

Or with pip:

```bash
pip install mcp-config-path
```

## Usage

```python
from mcp_config_path.main import get_config_path

# Get config path for Cursor
path = get_config_path("cursor")
print(path)

# Get config path for VSCode, with a custom base path
path = get_config_path("vscode", "/custom/home")
print(path)
```

## API

### get_config_path(name: str, path: Optional[str] = None) -> str
- `name`: The client name (see Supported Clients table).
- `path`: Optional base path. If not provided, uses the user's home directory.
- Returns: The absolute path to the config file as a string.

## License

This project is licensed under the MIT License.

