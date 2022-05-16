import http from "http";
import https from "https";
import { Application } from "express";

import { WondersmithAPIServerConfig } from "./config";
import { createApp } from "./app";
import { createServer } from "./server";

export class WondersmithAPIServer {
    public readonly config: WondersmithAPIServerConfig;

    private readonly app: Application;
    private readonly server: https.Server | http.Server;

    public constructor(config: WondersmithAPIServerConfig) {
        this.config = config;
        this.app = createApp(this.config);
        this.server = createServer(this.config, this.app);
    }

    public start() {
        this.server.listen(this.config.port, "localhost", () => {
            console.log("App now listening");
        });
    }

    public stop() {
        this.server.close();
    }
}
