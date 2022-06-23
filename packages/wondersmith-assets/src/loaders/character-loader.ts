import fs from "fs";
import path from "path";
import { SceneLoader } from "@babylonjs/core";

export interface CharacterManifest {
    file: string;
    name: string;
    animations?: string[];
}

export async function loadCharacterManifest(manifestPath: string) {
    if (fs.existsSync(manifestPath)) {
        try {
            const manifest: CharacterManifest = fs.readFileSync(manifestPath).toJSON() as unknown as CharacterManifest;
            // TODO: LOAD AS BASE64
        } catch (err) {
            throw new Error(`Unable to read character manifest "${manifestPath}": ${err}`);
        }
    } else {
        throw new Error(`Unable to find character manifest "${manifestPath}"`);
    }
}
