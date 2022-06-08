import { IpcRenderer, IpcRendererEvent } from "electron";

export type WSIpcClient = Pick<IpcRenderer, "on" | "off" | "once" | "send">;

export type WSIpcHandler<T = any[]> = (event: IpcRendererEvent, args: T) => void;
