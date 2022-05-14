import express from "express";
import http from "http";
import https from "https";

import { WondersmithAPIServerConfig } from "./config";

export class WondersmithAPIServer {

    public readonly config: WondersmithAPIServerConfig;

    private readonly app: Express.Application;
    private readonly server: https.Server | http.Server;

    public constructor(config: WondersmithAPIServerConfig) {
        this.config = config;
        this.app = express();
        // TODO: Obviously more work for https needs to be done
        this.server = config.cert ? new https.Server(this.app) : new http.Server(this.app);
    }

    public start() {
        this.server.listen(this.config.port);
    }

    public stop() {
        this.server.close();
    }
}
