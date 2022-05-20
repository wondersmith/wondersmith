exports.up = pgm => {
    // TODO: Maybe change this to instance_procs ? I don't know if I like using the name "instance" like this. Whatever.
    pgm.createTable("instances", {
        id: "id",
        zone: { type: "varchar(128)", notNull: true },
        endpoint: { type: "varchar(128)", notNull: true, unique: true },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
};
