import { Cell } from "./cell.js";

export interface GridConfig {
    xCount: number;
    yCount: number;
    size: number;
}

export class Grid {
    public readonly config: GridConfig;
    public readonly cells: Cell[][];

    public constructor(config: GridConfig) {
        this.config = config;
        this.cells = Array.from(new Array(this.config.xCount), (_, x) =>
            Array.from(new Array(this.config.yCount), (_, y) => new Cell({ x, y, size: this.config.size }))
        );
    }
}
