import express, { Application } from "express";
//import cookieParser from "cookie-parser";
//import bodyParser from "body-parser";
//import passport from "passport";

import { WondersmithAPIServerConfig } from "../config";
import { createRoutes } from "./routes";

export function createApp(config: WondersmithAPIServerConfig): Application {
    const app = express();
    /*
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    */
    /*
    app.use(passport.initialize());
    app.use(passport.session());
    */
    app.use("/", createRoutes());
    return app;
}
