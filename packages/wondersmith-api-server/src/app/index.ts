import Koa from "koa";
import passport from "koa-passport";

import { WondersmithAPIServerConfig } from "../config";
import { createRoutes } from "./routes";

export function createApp(config: WondersmithAPIServerConfig): Koa {
    const app = new Koa();
    /*
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    */
    
    // Passport authentication
    app.use(passport.initialize());

    app.use(createRoutes().routes());
    return app;
}
