import path from "path";
import fsExtra from "fs-extra";
import fsRoot from "fs-root";
import { WondersmithAssetContainers } from "./types";
import { AssetContainer, SceneLoader } from "@babylonjs/core";
import { CharacterManifest } from "./character/types";

export const assetFS = fsRoot(path.resolve(__dirname, "..", "assets"));

async function loadCharacter(this: WondersmithAssetManager, id: string): Promise<AssetContainer> {
    if (Object.prototype.hasOwnProperty.call(this.containers.characters, id)) {
        return this.containers.characters[id] as AssetContainer;
    } else {
        // Create root lookup
        const characterDir = `/characters/${id}`;

        // Load character manifest
        const characterManifest = JSON.stringify(
            this.fs.readFileSync(`${characterDir}/manifest.json`)
        ) as unknown as CharacterManifest;

        // Get the extension
        const baseExt = path.extname(characterManifest.data.base);

        // Load base mesh file
        const base64 = this.fs.readFileSync(`${characterDir}/${characterManifest.data.base}`).toString("base64");
        const b64Url = `data:;base64,${base64}`;

        console.log(b64Url);

        return this.loader.LoadAssetContainerAsync("", b64Url, undefined, undefined, baseExt);
    }
}

export class WondersmithAssetManager {
    public readonly fs: typeof assetFS;
    public readonly containers: WondersmithAssetContainers;
    public readonly loadCharacter: typeof loadCharacter;
    public readonly loader: typeof SceneLoader;

    public constructor(loader: typeof SceneLoader, fs = assetFS) {
        this.fs = fs;
        this.containers = { characters: {} };
        this.loader = loader;
        this.loadCharacter = loadCharacter.bind(this);
    }
}

export function createAssetManager(loader: typeof SceneLoader, fs = assetFS) {
    return new WondersmithAssetManager(loader, fs);
}
