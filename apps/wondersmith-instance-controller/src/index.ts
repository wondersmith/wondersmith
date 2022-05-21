import { ExecaChildProcess } from "execa";

export interface InstanceEntry {
    id: string;
    instance: string;
    host?: string;
    port: number;
    process?: ExecaChildProcess;
}

export class InstanceController {
    public readonly allowedInstances: string[];
    public readonly registry: Record<string, InstanceEntry>;

    public constructor(allowedInstances = ["*"]) {
        this.allowedInstances = allowedInstances;
        this.registry = {};
    }

    public createInstanceProcess(instance: string): this {
        if (this.allowedInstances.includes(instance)) {
            throw new Error("NOT IMPLEMENTED");
            return this;
        } else {
            throw new Error(`Instance "${instance}" not supported by controller`);
        }
    }
}
