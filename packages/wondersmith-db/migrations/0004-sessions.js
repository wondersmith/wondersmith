exports.up = pgm => {
    pgm.createTable("apiSessions", {
        id: { type: "char(53)", notNull: true, unique: true },
        userid: {
            type: "integer",
            notNull: true,
            references: "users",
            onDelete: "cascade",
        },
        createdAt: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
        lastUpdated: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("apiSessions", "id");
    pgm.createIndex("apiSessions", "userid");

    pgm.createTable("gameSessions", {
        id: { type: "char(53)", notNull: true, unique: true },
        userid: {
            type: "integer",
            notNull: true,
            unique: true,
            references: "users",
            onDelete: "cascade",
        },
        characterid: {
            type: "integer",
            notNull: true,
            unique: true,
            references: "characters",
            onDelete: "cascade",
        },
        createdAt: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
        lastUpdated: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    pgm.createIndex("gameSessions", "id");
    pgm.createIndex("gameSessions", "userid");
    pgm.createIndex("gameSessions", "characterid");
};
