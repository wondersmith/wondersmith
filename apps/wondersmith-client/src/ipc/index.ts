import { BrowserWindow, ipcMain } from "electron";

import { Logger } from "wondersmith-logger";

export function initIPCMain(win: BrowserWindow): void {
    ipcMain.on("goToPage", (_, page) => {
        Logger.get().info("Navigating to", page);
        win.loadFile(`./pages/${page}/index.html`);
    });
}
