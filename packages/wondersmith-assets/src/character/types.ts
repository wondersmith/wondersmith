import { WondersmithAssetManifest } from "../types";

export interface CharacterManifest extends WondersmithAssetManifest<"character"> {
    data: {
        base: string;
        animations: string[];
    }
}
