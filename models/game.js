module.exports = function (sequelize, DataTypes) {
    var newGames = sequelize.define('Game', {
        sport: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        league: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        gameAt: {
            type: DataTypes.DATE,
            notEmpty: true,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
       });
    
    return newGames;
};
