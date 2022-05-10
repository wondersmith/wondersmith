exports.up = (pgm) => {
    pgm.createTable("users", {
        id: "id",
        email: { type: "varchar(64)", notNull: true, unique: true },
        password: { type: "char(60)", notNull: true },
    });
};
