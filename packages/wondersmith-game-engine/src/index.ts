import { Camera, Engine, EngineOptions, FlyCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core";

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
        const options: EngineOptions = { adaptToDeviceRatio: true };
        this.babylon = new Engine(opts.canvas, opts.video?.antialias ?? false, options);
        this.scene = new Scene(this.babylon);
        this.camera = new FlyCamera("engine.camera", new Vector3(0, 0, -10), this.scene);
        this.camera.attachControl(opts.canvas, true);
        new HemisphericLight("light1", new Vector3(1, 1, 0), this.scene);
        MeshBuilder.CreateSphere("sphere", { diameter: 1 }, this.scene);
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
