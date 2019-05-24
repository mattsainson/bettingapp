module.exports = function (sequelize, DataTypes) {
    var Bet = sequelize.define('Bet', {
        userId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        gameId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        teamId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        betType: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        wager: {
            type: DataTypes.DECIMAL,
            notEmpty: true,
            allowNull: false
        },
        result: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
            defaultValue: "Pending",
        },
        placedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        processedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });
    return Bet;
};
