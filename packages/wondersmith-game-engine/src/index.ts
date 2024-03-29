import {
    Camera,
    Engine,
    EngineOptions,
    FlyCamera,
    HemisphericLight,
    MeshBuilder,
    Scene,
    SceneLoader,
    Vector3,
} from "@babylonjs/core";

import { WondersmithAssetManager } from "wondersmith-assets";

declare const globalThis: Global & { WondersmithGameEngine?: WondersmithGameEngine };

export interface WondersmithGameEngineOptions {
    canvas: HTMLCanvasElement;
    assets: WondersmithAssetManager;
    video?: {
        antialias?: boolean;
    };
}

export class WondersmithGameEngine {

    private readonly babylon: Engine;
    private readonly scene: Scene;
    private readonly camera: Camera;
    private readonly assets: WondersmithAssetManager;

    public static init(opts: WondersmithGameEngineOptions) {
        if (globalThis.WondersmithGameEngine) {
            throw Error("WondersmithGameEngine already globally instantiated");
        } else {
            return globalThis.WondersmithGameEngine = new WondersmithGameEngine(opts);
        }
    }

    public static get() {
        if (globalThis.WondersmithGameEngine) {
            return globalThis.WondersmithGameEngine;
        } else {
            throw Error("WondersmithGameEngine not globally instantiated");
        }
    }

    // TODO: Map of agents

    public constructor(opts: WondersmithGameEngineOptions) {
        const options: EngineOptions = { adaptToDeviceRatio: true };
        this.babylon = new Engine(opts.canvas, opts.video?.antialias ?? false, options);
        this.scene = new Scene(this.babylon);
        this.camera = new FlyCamera("engine.camera", new Vector3(0, 0, -10), this.scene);
        this.camera.attachControl(opts.canvas, true);
        this.assets = opts.assets;
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

    public resize(): this {
        this.babylon.resize(true);
        return this;
    }

    private render(): void {
        this.scene.render();
    }
}
