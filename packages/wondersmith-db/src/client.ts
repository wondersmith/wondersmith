import { Pool, ClientConfig, PoolConfig, QueryConfig, QueryResult, Submittable } from "pg";
import { parse } from "pg-connection-string";

declare var globalThis: Global & { WondersmithDBClient?: Client };

/**
 * High level database client class that allows for a globally available singleton of pooled connections.
 */
export class Client {
    /**
     * Initialise and return the global database client.
     */
    public static init(constr: string, max = 20): Client {
        const connectionConfig = parse(constr);
        // This needs to be cast as `PoolConfig` for some reason as the `ConnectionOptions` allow
        // the database name to be `string | null | undefined` instead of just `string | undefined`.
        const poolConfig: PoolConfig = { ...connectionConfig, max } as PoolConfig;
        return (globalThis.WondersmithDBClient = new Client(poolConfig));
    }

    /**
     * Get the global database client.
     *
     * @throws Error if no client exists.
     */
    public static get(): Client {
        if (!globalThis.WondersmithDBClient) {
            throw new Error("Attempted to access global DB client before init");
        }
        return globalThis.WondersmithDBClient;
    }

    /**
     */
    public static destroy(): void {
        if (globalThis.WondersmithDBClient) {
            // TODO: Destroy connections
            delete globalThis["WondersmithDBClient"];
        }
    }

    /// PG pool configuration
    private readonly config: PoolConfig;

    /// PG connection pool
    private readonly pool: Pool;

    /**
     */
    public constructor(config: PoolConfig) {
        this.config = config;
        this.pool = new Pool(this.config);
    }

    /**
     * Readonly access to *just* the Client config, useful for quickly setting up migrations
     * with already initialised config.
     */
    public get clientConfig(): ClientConfig {
        return {
            user: this.config.user,
            password: this.config.password,
            host: this.config.host,
            database: this.config.database,
            ssl: this.config.ssl,
        };
    }

    public async query<T extends Submittable>(
        qry: string | QueryConfig<any[]>,
        values?: any[]
    ): Promise<QueryResult<T>> {
        return this.pool.query<T>(qry, values);
    }
}
