import { Logger } from "wondersmith-logger";
import { Client, migrate } from "wondersmith-db";
import { WondersmithAPIServer } from "wondersmith-api-server";

import setupKiller from "./utils/killer.js";
import getConfig from "./config/index.js";

// TODO: Parse arguments and load config
getConfig(process.argv);

// TODO: Setup logger
Logger.get().info("Hello Server");

// Init the client
Client.init("postgresql://wonder:smith@localhost:5432/wondersmith");

// Run the migrations and wait for them to complete before proceeding
await migrate(Client.get());

// TODO: Create the socket based game server controller

// Create the API server
const apiServer = new WondersmithAPIServer({ port: 4242 });

// Setup the process killer for the servers so we can cleanly shut down
// TODO: Add clean killer to game server controller too
setupKiller(apiServer);

// TODO: Start the game server controller

// Start the API server after the game server so that it can be certain the game server is present.
// Process will now wait here as the API server is the foremost endpoint
apiServer.start();
