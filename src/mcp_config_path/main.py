import platform
from pathlib import Path
from typing import Optional


def get_config_path(name: str, path: Optional[str] = None) -> str:
    home = Path.home()

    if name == "claude_desktop":
        if platform.system() == "Darwin":
            return str(
                home / "Library/Application Support/Claude/claude_desktop_config.json"
            )
        elif platform.system() == "Windows":
            return str(home / "AppData/Roaming/Claude/claude_desktop_config.json")
        else:
            return ""
    elif name == "cline":
        if platform.system() == "Darwin":
            return str(
                home
                / "Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json"
            )
        else:
            return ""
    elif name == "roo_code":
        if path:
            return Path(path) / ".roo/mcp.json"
        else:
            if platform.system() == "Darwin":
                return str(
                    home
                    / "Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json"
                )
            else:
                return ""
    elif name == "claude_code":
        base = Path(path) if path else home
        return str(base / ".mcp.json")
    elif name == "vscode":
        base = Path(path) if path else home
        return str(base / ".vscode/mcp.json")
    elif name == "cursor":
        base = Path(path) if path else home
        return str(base / ".cursor/mcp.json")
    elif name == "mcphub.nvim":
        return str(home / ".config/mcphub/servers.json")
    elif name == "windsurf":
        return str(home / ".codeium/windsurf/mcp_config.json")
    elif name == "mcplinker":
        return str(home / ".config/mcplinker/mcp.json")
    else:
        base = Path(path) if path else home
        return str(base / "mcp.json")
