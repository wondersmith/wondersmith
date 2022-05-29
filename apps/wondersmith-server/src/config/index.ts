import { cosmiconfigSync } from "cosmiconfig";

import { WondersmithAPIServerConfig } from "wondersmith-api-server/dist/config.js";

import argv from "./args.js";

/**
* Generates the config for the server from a config file and / or command line arguments.
*/
export default function getConfig(args: NodeJS.Process["argv"]): WondersmithAPIServerConfig {
    const parsedArgs = argv(args);
    const configFile = cosmiconfigSync(parsedArgs.config ?? "config");
    console.log(parsedArgs, configFile);
    return {} as any;
}
