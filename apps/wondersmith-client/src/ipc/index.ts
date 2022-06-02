import { ipcMain } from "electron";

import { Logger } from "wondersmith-logger";

Logger.get().info("Hello");

ipcMain.on("goToPage", (page) => {
    Logger.get().info(page);
});