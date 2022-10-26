module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      displayName: {
        field: 'display_name',
        type: DataTypes.STRING,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscore: true,
      timestamps: false,
      tableName: 'users',
    }
  );

  return User;
};