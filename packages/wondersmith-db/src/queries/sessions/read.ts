import { Client } from "../../client";

export async function hasGameSession(gameSessionId: string): Promise<boolean> {
    return (
        await Client.get().query({
            name: "has-game-session",
            text: "SELECT EXISTS (SELECT true FROM game_sessions WHERE id=$1)",
            values: [gameSessionId],
        })
    ).rows[0] as unknown as boolean;
}
