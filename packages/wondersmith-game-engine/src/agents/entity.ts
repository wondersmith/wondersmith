import { Vector3 } from "@babylonjs/core";

import Agent from "./agent";

export interface EntityState {
    position: Vector3;
}

/**
 * An Entity is an Agent that exists in the world with positional coordinates and whose state
 * is evaluated along with the rest of the engine.
 */
export default class Entity<T extends EntityState> extends Agent<T> {
    public get position() {
        return this.state.position;
    }

    public set position(value: Vector3) {
        this.state.position = value;
    }
}
