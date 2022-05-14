import axios from "axios";

import { authenticated } from "./decorators";

export class WondersmithAPIClient {
    public readonly endpoint: string;

    public authToken: string | undefined;

    public constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    /**
     * Login and create an API session. This will store the auth token for future use.
     */
    public async login(user: string, pass: string): Promise<this> {
        await axios.post(this.path("auth"), { user, pass });
        // TODO: Set authToken
        return this;
    }

    /**
     * Creates a new game session, fails if one already exists.
     */
    @authenticated
    public async createGameSession(characterId: number): Promise<string> {
        await axios.put(this.path("game", "sessions"), { characterId });
        throw new Error("Not implemented");
    }

    /**
     * Generate a complete url from the given paths for the Client's endpoint.
     */
    private path(...paths: (string | number)[]): string {
        return `${this.endpoint}/${paths.join("/")}`;
    }
}
