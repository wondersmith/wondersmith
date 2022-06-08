import { IpcRenderer } from "electron";
import { WSIpcHandler } from "./types";

export interface IpcClient {
    on: <T>(channel: string, handler: WSIpcHandler<T>) => void;
    once: <T>(channel: string, handler: WSIpcHandler<T>) => void;
    off: (channel: string) => void;
    send: <T>(channel: string, payload: T) => void;
}

export function createIpcClient(ipcr: IpcRenderer): IpcClient {
    return {
        on: <T>(channel: string, handler: WSIpcHandler<T>) => {
            ipcr.on(channel, handler);
        },
        once: <T>(channel: string, handler: WSIpcHandler<T>) => {
            ipcr.once(channel, handler);
        },
        off: (channel: string) => {
            ipcr.removeAllListeners(channel);
        },
        send: <T>(channel: string, payload: T) => {
            ipcr.send(channel, payload);
        },
    };
}
