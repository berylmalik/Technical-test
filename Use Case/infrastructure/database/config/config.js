require("dotenv").config();

module.exports = {
    development: {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    },
    test: {
        username: process.env.USER_NAME_TEST,
        password: process.env.PASSWORD_TEST,
        database: process.env.DATABASE_TEST,
        host: process.env.HOST_TEST,
        dialect: process.env.DIALECT_TEST,
    },
};
