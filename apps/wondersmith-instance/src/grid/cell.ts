export interface CellConfig {
    x: number;
    y: number;
    size: number;
}

// NB: This is horribly optimised to create accessors for all these readonly static values

export class Cell {
    private readonly config: CellConfig;

    public constructor(config: CellConfig) {
        this.config = config;
    }

    public get x(): number {
        return this.config.x;
    }

    public get y(): number {
        return this.config.y;
    }

    public get size(): number {
        return this.config.size;
    }
}
