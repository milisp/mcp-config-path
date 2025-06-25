import os from "os";
import path from "path";

/**
 * Get the config path for a given app name and optional base path.
 * Mirrors the logic of the Python get_config_path function.
 * @param name - The application name.
 * @param basePath - Optional base path to use instead of the user's home directory.
 * @returns The config file path as a string.
 */
export function getConfigPath(name: string, basePath?: string): string {
  const home = os.homedir();
  const platform = os.platform(); // 'darwin', 'win32', 'linux', etc.

  if (name === "claude_desktop") {
    if (platform === "darwin") {
      // macOS path for Claude Desktop
      return path.join(home, "Library/Application Support/Claude/claude_desktop_config.json");
    } else if (platform === "win32") {
      // Windows path for Claude Desktop
      return path.join(home, "AppData/Roaming/Claude/claude_desktop_config.json");
    } else {
      return "";
    }
  } else if (name === "cline") {
    if (platform === "darwin") {
      // macOS path for cline
      return path.join(
        home,
        "Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json"
      );
    } else {
      return "";
    }
  } else if (name === "roo_code") {
    if (basePath) {
      // Custom path for roo_code
      return path.join(basePath, ".roo/mcp.json");
    } else {
      if (platform === "darwin") {
        // macOS path for roo_code
        return path.join(
          home,
          "Library/Application Support/Code/User/globalStorage/rooveterinaryinc.roo-cline/settings/mcp_settings.json"
        );
      } else {
        return "";
      }
    }
  } else if (name === "claude_code") {
    // Use basePath if provided, else home
    const base = basePath || home;
    return path.join(base, ".mcp.json");
  } else if (name === "vscode") {
    const base = basePath || home;
    return path.join(base, ".vscode/mcp.json");
  } else if (name === "cursor") {
    const base = basePath || home;
    return path.join(base, ".cursor/mcp.json");
  } else if (name === "mcphub.nvim") {
    // Path for mcphub.nvim
    return path.join(home, ".config/mcphub/servers.json");
  } else if (name === "windsurf") {
    // Path for windsurf
    return path.join(home, ".codeium/windsurf/mcp_config.json");
  } else if (name === "mcplinker") {
    // Path for mcplinker
    return path.join(home, ".config/mcplinker/mcp.json");
  } else {
    // Default: use basePath if provided, else home
    const base = basePath || home;
    return path.join(base, "mcp.json");
  }
}
