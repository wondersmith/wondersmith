import bcrypt from "bcrypt";

import { Client } from "../../client";

export async function createAPISession(userId: number) {
    return Client.get().query({
        name: "create-api-session",
        text: "INSERT INTO api_sessions (id, user_id) VALUES ($1, $2)",
        values: [bcrypt.hashSync(userId.toString(), Math.random()).substring(7), userId],
    });
}

export async function createGameSession(userId: number, characterId: number) {
    return Client.get().query({
        name: "create-game-session",
        text: "INSERT INTO game_sessions (id, user_id, character_id) VALUES ($1, $2, $3)",
        values: [bcrypt.hashSync(`${userId}:${characterId}`, Math.random()).substring(7), userId, characterId],
    });
}
