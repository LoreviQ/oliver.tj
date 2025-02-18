import path from "path";
import fs from "fs";

export function loadConfig() {
    const configPath = path.join(process.cwd(), "app", "site.conf");
    const content = fs.readFileSync(configPath, "utf-8");
    const config: Record<string, string> = {};

    content.split('\n').forEach(line => {
        // Skip comments and empty lines
        if (line.startsWith('#') || !line.trim()) return;

        const [key, value] = line.split('=').map(str => str.trim());
        if (key && value) {
            config[key] = value;
        }
    });

    return config;
}