const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class City extends Model { };

City.init({
    name: DataTypes.TEXT,
    favoris: DataTypes.BOOLEAN,
    temperature: DataTypes.FLOAT,
    wind: DataTypes.FLOAT,

}, {
    sequelize,
    tableName: 'city'
});

module.exports = City;