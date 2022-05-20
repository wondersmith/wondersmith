exports.up = pgm => {
    pgm.createTable("versions", {
        version: { type: "varchar(64)", notNull: true, unique: true },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.sql(`INSERT INTO versions (version) VALUES ('0.0.1')`);
};
