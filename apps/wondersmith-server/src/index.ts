import express from "express";
import { Server } from "socket.io";
import http from "http";

import { Client, migrate } from "wondersmith-db";

// Init the client
Client.init("postgresql://wonder:smith@localhost:5432/wondersmith");

// Run the migrations
(async () => await migrate(Client.get()))();

const app = express();
const server = new http.Server(app);

const io = new Server(server);
io.on("connection", (/*client*/) => {
    /* NOP */
});
