module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Post.associate = function(models) {
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
    Post.hasMany(models.Response, {
      onDelete: "cascade",
      onUpdate: "cascade"
    });
  };

  return Post;
};