import { AssetContainer } from "@babylonjs/core";

export interface WondersmithAssetContainers {
    characters: Record<string, AssetContainer>;
}

export interface WondersmithAssetManifest<T extends string, D = any> {
    type: T;
    data: D;
}
