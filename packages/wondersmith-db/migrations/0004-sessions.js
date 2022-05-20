exports.up = pgm => {
    pgm.createTable("api_sessions", {
        id: { type: "char(53)", notNull: true, unique: true },
        user_id: {
            type: "integer",
            notNull: true,
            references: "users",
            onDelete: "cascade",
        },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
        updated: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("api_sessions", "id");
    pgm.createIndex("api_sessions", "user_id");

    pgm.createTable("game_sessions", {
        id: { type: "char(53)", notNull: true, unique: true },
        user_id: {
            type: "integer",
            notNull: true,
            unique: true,
            references: "users",
            onDelete: "cascade",
        },
        character_id: {
            type: "integer",
            notNull: true,
            unique: true,
            references: "characters",
            onDelete: "cascade",
        },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
        updated: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("game_sessions", "id");
    pgm.createIndex("game_sessions", "user_id");
    pgm.createIndex("game_sessions", "character_id");
};
