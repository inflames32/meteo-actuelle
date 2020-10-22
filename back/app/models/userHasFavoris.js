const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User_has_favoris extends Model { };

User_has_favoris.init({
    quantity: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "user_has_favoris"
});

module.exports = User_has_favoris;
