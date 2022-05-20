exports.up = pgm => {
    pgm.createTable("users", {
        id: "id",
        email: { type: "varchar(64)", notNull: true, unique: true },
        password: { type: "char(60)", notNull: true },
        salt: { type: "char(29)", notNull: true },
        created: { type: "timestamp", notNull: true, default: pgm.func("current_timestamp") },
    });
    // Default admin user with "admin123" as a bcrypt'd password + salt
    pgm.sql(`
        INSERT INTO users
        (email, password, salt)
        VALUES
        ('admin@wondersmith', '$2b$10$8raa.2MRPwuqwDkvfCNvpOyxpWZIDri/CSY1kQhL4ZjRx2QdvqKMe', '$2b$10$8raa.2MRPwuqwDkvfCNvpO')
    `);
};
