import path from "path";
import pgm from "node-pg-migrate";

import { Client } from "./client";

export async function migrate(client: Client): Promise<void> {
    console.log("Migration started...");

    // The path to the directory containing all migrations
    const migrationsDir = path.resolve(__dirname, "..", "migrations");

    // Generate a client to use for migrations from the pool
    const mgClient = await client.getClient();

    // Pass to pgm and run the migrations
    await pgm({ dbClient: mgClient, dir: migrationsDir, migrationsTable: "_migrations", direction: "up" });

    console.log("Migration finished...");

    // Release the client
    mgClient.release();

    console.log("Migration client released");
}
