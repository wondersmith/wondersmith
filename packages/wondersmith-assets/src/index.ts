import path from "path";
import fsRoot from "fs-root";

export const assetFS = fsRoot(path.resolve(__dirname, "..", "assets"));