import { contextBridge, ipcRenderer } from "electron";
import { createIpcClient } from "./ipc/ipc-client";

contextBridge.exposeInMainWorld("preload", {
    ipcClient: createIpcClient(ipcRenderer),
});
