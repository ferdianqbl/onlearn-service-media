require("dotenv").config();

module.exports = {
  port: process.env.PORT,
  db: {
    name: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOSTNAME,
  },
};
