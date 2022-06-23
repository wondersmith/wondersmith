import { Mesh, Vector3 } from "@babylonjs/core";

import Entity, { EntityState } from "./entity";

export interface Entity3DState extends EntityState {
    rotation: Vector3;
    mesh: Mesh;
}

export default class Entity3D extends Entity<Entity3DState> {
    public get mesh() {
        return this.state.mesh;
    }

    public get rotation() {
        return this.state.rotation;
    }

    public set rotation(value: Vector3) {
        this.state.rotation = value;
    }
}
