import { IpcClient } from "../../../ipc/ipc-client";
import { WSIpcHandler } from "../../../ipc/types";

declare const globalThis: Window & { wondersmith: { global: { ipcClient?: WSIpcClient } } } & {
    preload: { ipcClient: IpcClient };
};

export default class WSIpcClient {
    public static get(): WSIpcClient {
        if (!globalThis.wondersmith.global.ipcClient) {
            globalThis.wondersmith.global.ipcClient = new WSIpcClient();
        }
        return globalThis.wondersmith.global.ipcClient;
    }

    public on<T>(channel: string, handler: WSIpcHandler<T>): this {
        globalThis.preload.ipcClient.on(channel, handler);
        return this;
    }

    public once<T>(channel: string, handler: WSIpcHandler<T>): this {
        globalThis.preload.ipcClient.once(channel, handler);
        return this;
    }

    public off(channel: string): this {
        globalThis.preload.ipcClient.off(channel);
        return this;
    }

    public send<T>(channel: string, payload: T): this {
        globalThis.preload.ipcClient.send(channel, payload);
        return this;
    }
}
