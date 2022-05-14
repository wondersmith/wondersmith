exports.up = pgm => {
    pgm.createTable("characters", {
        id: "id",
        userid: {
            type: "integer",
            notNull: true,
            references: '"users"',
            onDelete: "cascade",
        },
        name: { type: "varchar(32)", notNull: true, unique: true },
        createdAt: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("characters", "userid");

    // Create a default character for the admin user
    pgm.sql(`INSERT INTO characters (userid, name) VALUES (1, 'admin')`);
};
