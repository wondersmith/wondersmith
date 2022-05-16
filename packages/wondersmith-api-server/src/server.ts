import http from "http";
import https from "https";
import { Application } from "express";

import { WondersmithAPIServerConfig } from "./config";

export function createServer(config: WondersmithAPIServerConfig, app: Application): http.Server | https.Server {
    const server = new (config.cert ? https : http).Server(app);
    return server;
}
