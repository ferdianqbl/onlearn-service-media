const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config/env");
const sequelize = new Sequelize(db.name, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
});

const Media = sequelize.define(
  "Media",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  {
    tableName: "media",
  }
);

module.exports = Media;
