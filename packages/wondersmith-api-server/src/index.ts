import http from "http";
import https from "https";

import { createHttpTerminator, HttpTerminator } from "http-terminator";

import Koa from "koa";

import { WondersmithAPIServerConfig } from "./config";
import { createApp } from "./app";

export class WondersmithAPIServer {
    public readonly config: WondersmithAPIServerConfig;

    private readonly app: Koa;
    private terminator?: HttpTerminator;
    private server?: http.Server | https.Server;

    public constructor(config: WondersmithAPIServerConfig) {
        this.config = config;
        this.app = createApp(this.config);
    }

    public start() {
        console.log("Starting server");
        console.table(this.config);
        this.server = this.app.listen(this.config.port, "localhost", () => {
            console.log("App now listening");
        });
        this.terminator = createHttpTerminator({ server: this.server });
    }

    public async stop(): Promise<void> {
        await this.terminator?.terminate();
    }
}
