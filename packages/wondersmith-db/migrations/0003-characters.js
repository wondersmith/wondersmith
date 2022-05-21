exports.up = pgm => {
    pgm.createTable("characters", {
        id: "id",
        user_id: {
            type: "integer",
            notNull: true,
            references: "users",
            onDelete: "cascade",
        },
        name: { type: "varchar(32)", notNull: true, unique: true },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("characters", "user_id");

    // Create a default character for the admin user
    pgm.sql(`INSERT INTO characters (user_id, name) VALUES (1, 'admin')`);
};
