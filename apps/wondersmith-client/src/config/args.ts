import { program } from "commander";

export default function argv(args: NodeJS.Process["argv"]) {
    return program
        .option("-u, --user <email>")
        .option("-p, --pass <password>")
        .option("--splash <splash>", "Whether or not to show the splash screen", true)
        .parse(args);
}
