module.exports = (sequelize, DataTypes) => {
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
      createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        field: "created_at",
      },
      updateAt: {
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

  return Media;
};
