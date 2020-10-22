const User = require('./user');
const City = require('./city');
const User_has_favoris = require('./userHasFavoris');

User.hasMany(City, {
    as: 'cities',
    foreignKey: 'user_id'
});

City.belongsToMany(User, {
    as: 'users',
    through: UserHasFavoris,
    foreignKey: 'user_id',
    otherKey: "city_id",
    timestamps: false
});


module.exports = { User };