import { Client } from "wondersmith-db";

import { InstanceServer } from "./server.js";

Client.init("postgresql://wonder:smith@localhost:5432/wondersmith");

// TODO: Init the instance and wait before making the port available

new InstanceServer({ port: 5555 }).start();
