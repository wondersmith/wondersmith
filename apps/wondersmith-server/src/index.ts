import { Client, migrate } from "wondersmith-db";
import { WondersmithAPIServer } from "wondersmith-api-server";

// Init the client
Client.init("postgresql://wonder:smith@localhost:5432/wondersmith");

// Run the migrations
(async () => await migrate(Client.get()))();

// Start a new API server
new WondersmithAPIServer({ port: 4242 }).start();

/*
const io = new Server(server);
io.on("connection", (client) => {
});
*/
