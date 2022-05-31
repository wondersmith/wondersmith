import { app, BrowserWindow } from "electron";

(async () => {
    await app.whenReady();
    const win = new BrowserWindow({ width: 800, height: 600 });
    // TODO: Make this dependent on args parsing
    win.loadFile("./pages/splash/index.html");
})();