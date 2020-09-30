module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Response", {
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: { 
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Response.associate = function(models) {
    Response.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Response;
};