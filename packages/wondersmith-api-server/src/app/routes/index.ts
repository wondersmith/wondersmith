import { Router } from "express";

import { authRouter } from "./auth";

export function createRoutes(): Router {
    const router = Router({ strict: false });
    router.use("/auth/*", authRouter);
    router.get("/example", (req, res) => res.status(200).send("hello"));
    return router;
}
