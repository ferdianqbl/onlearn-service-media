const { db } = require("./env");

module.exports = {
  development: {
    username: db.username,
    password: db.password,
    database: db.name,
    host: db.host,
    dialect: "mysql",
  },
  test: {
    username: db.username,
    password: db.password,
    database: db.name,
    host: db.host,
    dialect: "mysql",
  },
  production: {
    username: db.username,
    password: db.password,
    database: db.name,
    host: db.host,
    dialect: "mysql",
  },
};
