const User = function (Sequelize, DataTypes) {
  return Sequelize.define(
    "User",
    {
      // 컬럼 정의
      // id INT NOT NULL PRIMARY KEY AUTO_
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncreament: true,
      },
      // userid VARCHAR(20) NOT NULL
      userid: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // name VARCHAR(20) NOT NULL
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // pw VARCHAR(20) NOT NULL
      pw: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timeStamps: false,
    }
  );
};

module.exports = User;
