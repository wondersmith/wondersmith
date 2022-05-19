import Router from "@koa/router";

import { authRouter } from "./auth";

export function createRoutes(): Router {
    const router = new Router();
    router.use("/auth", authRouter().routes());
    return router;
}
