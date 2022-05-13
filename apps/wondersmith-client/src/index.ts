import { app, BrowserWindow } from "electron";

(async () => {
    await app.whenReady();
    new BrowserWindow({ width: 800, height: 600 });
})();
