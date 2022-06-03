import { Engine } from "@babylonjs/core";

export interface WondersmithGameEngineOptions {
    canvas: HTMLCanvasElement,
}

export class WondersmithGameEngine {
    private babylon: Engine;

    public constructor(opts: WondersmithGameEngineOptions) {
        this.babylon = new Engine(opts.canvas, true);
    }
}
