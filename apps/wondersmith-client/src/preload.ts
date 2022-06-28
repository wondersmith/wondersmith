import { contextBridge, ipcRenderer } from "electron";

import { assetFS } from "wondersmith-assets";

import { createIpcClient } from "./ipc/ipc-client";

contextBridge.exposeInMainWorld("preload", {
    ipcClient: createIpcClient(ipcRenderer),
    assetFS,
});
