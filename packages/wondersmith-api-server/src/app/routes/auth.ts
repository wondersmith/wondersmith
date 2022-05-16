import { Router } from "express";

export function authRouter(): Router {
    const router = Router({ strict: true });

    router.get("/login", (req, res) => {
        console.log("IN /AUTH");
        res.status(200).send("{\"token\": \"123\"}");
    });

    return router;
}
