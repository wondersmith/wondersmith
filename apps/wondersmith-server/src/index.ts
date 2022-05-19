import { Client, migrate } from "wondersmith-db";
import { WondersmithAPIServer } from "wondersmith-api-server";

// Init the client
Client.init("postgresql://wonder:smith@localhost:5432/wondersmith");

// Run the migrations
(async () => await migrate(Client.get()))();

// Start a new API server
const wsAPIServer = new WondersmithAPIServer({ port: 4242 });

// Multiple ways of ending a process so we want to take the first one that works and only use it
// then - the process may hang for a bit while all connections are cleanly shut down.
let killCount = 0;
const killer = async () => {
    if (killCount++ === 0) {
        console.log("Stopping...");
        await wsAPIServer.stop();
        console.log("Stopped");
    }
};
["SIGINT", "SIGQUIT", "SIGTERM"].forEach(sig => process.on(sig, killer));

// Start the API server
wsAPIServer.start();

/*
const io = new Server(server);
io.on("connection", (client) => {
});
*/
