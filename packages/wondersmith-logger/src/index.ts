import winston from "winston";

declare const globalThis: Global & { WondersmithLogger?: Logger };

/**
 * Generic loggable array of items.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Loggable = any[];

export class Logger {
    public static get(): Logger {
        if (!globalThis.WondersmithLogger) {
            globalThis.WondersmithLogger = new Logger();
        }
        return globalThis.WondersmithLogger;
    }

    private readonly logger: winston.Logger;

    public constructor() {
        this.logger = winston.createLogger();
        // Setup basic console transport by default
        this.addTransport(new winston.transports.Console());
    }

    public setLevel(level: string): this {
        this.logger.level = level;
        return this;
    }

    public setFormat(format: winston.Logform.Format): this {
        this.logger.format = format;
        return this;
    }

    public addTransport(transport: winston.transport): this {
        this.logger.add(transport);
        return this;
    }

    public error(...msg: Loggable): this {
        this.logger.error(msg);
        return this;
    }

    public warn(...msg: Loggable): this {
        this.logger.warn(msg);
        return this;
    }

    public info(...msg: Loggable): this {
        this.logger.info(msg);
        return this;
    }

    public http(...msg: Loggable): this {
        this.logger.http(msg);
        return this;
    }

    public verbose(...msg: Loggable): this {
        this.logger.verbose(msg);
        return this;
    }

    public debug(...msg: Loggable): this {
        this.logger.debug(msg);
        return this;
    }

    public silly(...msg: Loggable): this {
        this.logger.silly(msg);
        return this;
    }
}
