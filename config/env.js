require("dotenv").config();
const path = require("path");

module.exports = {
  rootPath: path.resolve(__dirname, ".."),
  server_port: process.env.PORT,
  db: {
    dialect: process.env.DB_DIALECT,
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME,
  },
};
