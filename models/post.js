module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    question: {
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

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Post.hasMany(models.Response, {
      onDelete: "cascade"
    });
  };

  return Post;
};