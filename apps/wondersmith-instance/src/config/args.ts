import { program } from "commander";

export default function argv(args: NodeJS.Process["argv"]) {
    return program
        .option("-i, --id", "ID of the instance to run")
        .option("-p, --port <port>", "Socket port to listen on for new connections")
        .option("-r, --resources <dir>", "Root directory of instance resources")
        .parse(args);
}
