import path from "path";

import { app, BrowserWindow } from "electron";

import { initIPCMain } from "./ipc";

(async () => {
    await app.whenReady();
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.resolve(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    initIPCMain(win);
    win.maximize();
    // TODO: Make this dependent on args parsing
    await win.loadFile("./pages/game/index.html");
})();
