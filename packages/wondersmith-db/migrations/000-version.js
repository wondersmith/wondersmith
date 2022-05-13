exports.up = pgm => {
    pgm.createTable("versions", {
        version: { type: "varchar(64)", notNull: true, unique: true },
        createdAt: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    // Initial 0.0.1 version
    pgm.sql(`INSERT INTO versions (version) VALUES("0.0.1")`);
};
