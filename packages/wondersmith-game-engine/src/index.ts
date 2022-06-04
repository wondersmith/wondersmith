import { Camera, Engine, FlyCamera, Scene, Vector3 } from "@babylonjs/core";

export interface WondersmithGameEngineOptions {
    canvas: HTMLCanvasElement;
    video?: {
        antialias?: boolean;
    }
}

export class WondersmithGameEngine {
    private readonly babylon: Engine;
    private readonly scene: Scene;
    private readonly camera: Camera;

    // TODO: Map of agents

    public constructor(opts: WondersmithGameEngineOptions) {
        this.babylon = new Engine(opts.canvas, opts.video?.antialias ?? false);
        this.scene = new Scene(this.babylon);
        this.camera = new FlyCamera("engine.camera", Vector3.Zero(), this.scene);
        this.camera.attachControl(opts.canvas, true);
    }

    public start(): this {
        this.babylon.runRenderLoop(this.render.bind(this));
        return this;
    }

    public stop(): this {
        this.babylon.stopRenderLoop();
        return this;
    }

    private render(): void {
        this.scene.render();
    }
}
