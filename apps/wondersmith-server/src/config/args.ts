import { program } from "commander";

export interface WondersmithServerArgs {
    config?: string;
    port?: number;
    database?: string;
}

export default function argv(args: NodeJS.Process["argv"]): WondersmithServerArgs {
    const parsedArgs = program
        .option("-c, --config <file>", "Path to a config file")
        .option("-p, --port <port>", "Port to start the API server on")
        .option("-d, --database <connection>", "Postgresql database connection string")
        .parse(args);

    return {
        config: parsedArgs.getOptionValue("config"),
        port: parsedArgs.getOptionValue("port"),
        database: parsedArgs.getOptionValue("database"),
    };
}
