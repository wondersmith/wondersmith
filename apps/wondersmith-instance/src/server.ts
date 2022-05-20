import { Server, Socket } from "socket.io";
import bcrypt from "bcrypt";

import { Client } from "wondersmith-db";

export interface InstanceServerConfig {
    host?: string;
    port: number;
}

export interface Connection {
    sessionId: string;
    userId: number;
    characterId: number;
    socket: Socket;
}

export class InstanceServer {
    public readonly config: InstanceServerConfig;
    public readonly connections: Record<string, Connection>;

    private readonly lobby: Record<string, Socket>;
    private readonly server: Server;

    public constructor(config: InstanceServerConfig) {
        this.config = config;
        this.connections = {};
        this.lobby = {};
        this.server = new Server(config.port);
    }

    public start(): this {
        this.server.on("connection", socket => {
            const lobbyId = bcrypt.hashSync(Math.random().toString(), Math.random());
            this.lobby[lobbyId];

            socket.on("handshake", async (sessionId: string) => {
                const hasGameSession = await Client.get().queries.sessions.hasGameSession(sessionId);
                if (hasGameSession) {
                    socket.emit("load", {});
                } else {
                    socket.emit("error", {});
                    socket.disconnect();
                    delete this.lobby[lobbyId];
                }
            });

            socket.on("ready", (sessionId: string) => {
                this.connections[sessionId] = { sessionId, userId: -1, characterId: -1, socket };
                delete this.lobby[lobbyId];
                this.connections[sessionId]?.socket.emit("play", {});
            });
        });

        return this;
    }
}
