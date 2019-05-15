module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define('Team', {
        gameId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        home: {
            type: DataTypes.BOOLEAN,
            notEmpty: true,
            allowNull: false
        },
        spread: {
            type: DataTypes.DECIMAL,
            notEmpty: true,
            allowNull: false
        },
        spreadPayout: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        moneylinePayout: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        }
    });
    return Team;
};
