module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
        questionTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: { len: [1] }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1] }
        }
    });

    Post.associate = function (models) {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
        });
        Post.hasMany(models.resAnswer, {
            onDelete: "cascade"
          });
    };
    return Post;
};

