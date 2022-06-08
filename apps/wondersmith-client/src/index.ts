import path from "path";

import { app, BrowserWindow, screen } from "electron";

import { initIPCMain } from "./ipc";

(async () => {
    await app.whenReady();
    const screenGeom = screen.getPrimaryDisplay().size;
    const win = new BrowserWindow({
        width: screenGeom.width,
        height: screenGeom.height,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
        },
        frame: false,
    });
    initIPCMain(win);
    // Default to 16:9 - otherwise get resolution
    win.on("resize", () => {
        win.webContents.send("resize", { width: 0, height: 0 });
    });
    // TODO: Make this dependent on args parsing
    await win.loadFile("./pages/game/index.html");
})();
