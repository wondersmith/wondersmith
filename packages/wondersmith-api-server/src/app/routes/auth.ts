import Router from "@koa/router";

export function authRouter(): Router {
    const router = new Router();

    router.get("/login", ctx => {
        ctx.status = 200;
        ctx.body = `{ "auth": true }`;
    });

    return router;
}
