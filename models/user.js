module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        balance: {
            type: DataTypes.DECIMAL,
        },
        lastLoginAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
    });
    return User;
};
