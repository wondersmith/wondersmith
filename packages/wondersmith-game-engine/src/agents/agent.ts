
/**
 * The base "Agent" that exists
 */
export default abstract class Agent<T = Record<string, never>> {
    /**
     * Every agent has an ID that is reflected from the server.
     */
    public readonly id: string;

    /**
     * Every agent contains arbitrary state.
     */
    public readonly state: T;

    public constructor(id: string, state: T) {
        this.id = id;
        this.state = state;
    }
}
