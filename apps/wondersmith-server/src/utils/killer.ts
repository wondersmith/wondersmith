import { WondersmithAPIServer } from "wondersmith-api-server";

/**
 * Multiple ways of ending a process so we want to take the first one that works and only use it
 * then - the process may hang for a bit while all connections are cleanly shut down.
 */
export default function setupKiller(apiServer: WondersmithAPIServer) {
    let killCount = 0;
    const killer = async () => {
        if (killCount++ === 0) {
            console.log("Stopping...");
            await apiServer.stop();
            console.log("Stopped");
        }
    };
    ["SIGINT", "SIGQUIT", "SIGTERM"].forEach(sig => process.on(sig, killer));
}
