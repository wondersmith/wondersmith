import winston from "winston";

declare var globalThis: Global & { WondersmithLogger?: Logger };

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

    public error(...msg: any[]): this {
        this.logger.error(msg);
        return this;
    }

    public warn(...msg: any[]): this {
        this.logger.warn(msg);
        return this;
    }

    public info(...msg: any[]): this {
        this.logger.info(msg);
        return this;
    }

    public http(...msg: any[]): this {
        this.logger.http(msg);
        return this;
    }

    public verbose(...msg: any[]): this {
        this.logger.verbose(msg);
        return this;
    }

    public debug(...msg: any[]): this {
        this.logger.debug(msg);
        return this;
    }

    public silly(...msg: any[]): this {
        this.logger.silly(msg);
        return this;
    }
}
