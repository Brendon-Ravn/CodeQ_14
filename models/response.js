module.exports = function (sequelize, DataTypes) {
    const resAnswer = sequelize.define("Post", {
        answer: {
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

    resAnswer.associate = function (models) {
        resAnswer.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return resAnswer;
};
