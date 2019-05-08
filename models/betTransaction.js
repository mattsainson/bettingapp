module.exports = function (sequelize, DataTypes) {
    var BetTransaction = sequelize.define('BetTransaction', {
        userId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        betId: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            allowNull: false
        },
        transactionAt: {
            type: DataTypes.DATE,
            notEmpty: true,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        transactionAmount: {
            type: DataTypes.DECIMAL,
            notEmpty: true,
            allowNull: false
        }
    });
    return BetTransaction;
};
