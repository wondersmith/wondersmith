import { program } from "commander";

export default function argv(args: NodeJS.Process["argv"]) {
    return program
        .option("-i, --id", "ID of this instance controller")
        .option("-s, --server <endpoint>", "Main server socket endpoint")
        .option("-p, --port <port>", "Override the configured connection socket")
        .option("-r, --resources <dir>", "Root directory of instance resources")
        .parse(args);
}
