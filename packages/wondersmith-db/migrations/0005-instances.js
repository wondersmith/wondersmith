exports.up = pgm => {
    pgm.createTable("instances", {
        id: "id",
        name: { type: "varchar(128)", notNull: true, unique: true },
    });

    pgm.createTable("instance_procs", {
        id: "id",
        instance_id: { type: "integer", notNull: true, references: "instances", onDelete: "cascade" },
        endpoint: { type: "varchar(128)", notNull: true, unique: true },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });

    // The World instance must always exist
    pgm.sql("INSERT INTO instances (name) VALUES ('World')");
};
