exports.up = pgm => {
    pgm.createTable("instances", {
        id: { type: "varchar(64)", notNull: true, unique: true },
    });
    pgm.createIndex("instances", "id");

    pgm.createTable("instance_controllers", {
        id: { type: "varchar(64)", notNull: true, unique: true },
        connected: { type: "boolean", notNull: true, default: false },
        endpoint: { type: "varchar(128)", notNull: true, unique: true },
    });
    pgm.createIndex("instance_controllers", "id");

    pgm.createTable("instance_procs", {
        id: "id",
        instance_controller_id: { type: "varchar(64)", notNull: true, references: "instances", onDelete: "cascade" },
        instance_id: { type: "varchar(64)", notNull: true, references: "instances", onDelete: "cascade" },
        endpoint: { type: "varchar(128)", notNull: true, unique: true },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("instance_proces", "instance_controller_id");
    pgm.createIndex("instance_procs", "instance_id");

    // The World instance must always exist
    pgm.sql("INSERT INTO instances (name) VALUES ('World')");
};
