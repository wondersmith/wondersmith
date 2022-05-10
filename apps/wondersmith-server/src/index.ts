import express from "express";
import { Server } from "socket.io";

import http from "http";

const app = express();
const server = new http.Server(app);

const io = new Server(server);
io.on("connection", (/*client*/) => {
    /* NOP */
});
