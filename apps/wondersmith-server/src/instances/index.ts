import { execa, ExecaChildProcess } from "execa";

export interface InstanceEntry {
    id: string;
    instance: string;
    host?: string;
    port: number;
    process?: ExecaChildProcess;
}

export class InstanceController {
    public readonly registry: Record<string, InstanceEntry>;

    public constructor() {
        this.registry = {};
    }
}