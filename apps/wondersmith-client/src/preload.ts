import fs from "fs";
import path from "path";
import { contextBridge, ipcRenderer } from "electron";

import { createIpcClient } from "./ipc/ipc-client";

contextBridge.exposeInMainWorld("preload", {
    ipcClient: createIpcClient(ipcRenderer),
    assetFs: {
        readFileSync: (p: string, opts: Parameters<typeof fs["readFileSync"]>[1]) =>
            fs.readFileSync(path.join(__dirname, p), opts),
    },
});
