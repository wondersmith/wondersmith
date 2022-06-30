import { contextBridge, ipcRenderer } from "electron";

import { assetFS, createAssetManager } from "wondersmith-assets";

import { createIpcClient } from "./ipc/ipc-client";

contextBridge.exposeInMainWorld("preload", {
    ipcClient: createIpcClient(ipcRenderer),
    assetFS: assetFS,
    lib: {
        createAssetManager,
    },
});
