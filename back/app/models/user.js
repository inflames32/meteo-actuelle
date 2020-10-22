const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class User extends Model { };

User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize,
    tableName: 'user'
});

module.exports = User;