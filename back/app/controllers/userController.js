const User = require('../models/user');
const User_has_Favoris = require('../models/userHasFavoris');
const bcrypt = require('bcrypt');
var passwordValidator = require('password-validator');

var schema = new passwordValidator();

schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


const userController = {
    getOneUser: async (req, res) => {
        try {
            // localhost:3000/user/:id
            const userId = req.params.id;
            const user = await User.findOne({
                where: {
                    id: userId
                }
            });
            if (!user) {
                return res.status(404).json('cant find user with this id' + userId);
            };
            res.json(user);
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id;
            const user = await User.findOne({
                where: {
                    id: userId,
                }
            });
            if (!user) {
                return res.status(404).json('cant find user with this id' + userId);
            };
            await User_has_Favoris.destroy({
                where: {
                    id: userId,
                }
            });

            await user.destroy();
            await user.save();
            res.json('user has been deleted from the database with id:' + userId);

        }
        catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    createUser: async (req, res) => {
        try {
            const { email, password, passwordConfirm } = req.body;
            console.log(email, password, passwordConfirm);
            const bodyErrors = [];
            const userExist = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!schema.validate(password)) {
                bodyErrors.push(...schema.validate(password, { list: true }));
            }
            if (!email) {
                bodyErrors.push('email cannot be empty');
            }

            if (userExist) {
                bodyErrors.push('this e-mail is already registered');
            };
            if (!password) {
                bodyErrors.push('password cannot be empty');
            }
            if (!passwordConfirm) {
                bodyErrors.push('password confirmation cannot be empty');
            }
            if (password !== passwordConfirm) {
                bodyErrors.push('passwords must be the same');
            }
            if (bodyErrors.length) {
                return res.status(400).json(bodyErrors);
            }

            const saltCrypt = 10;
            const salt = await bcrypt.genSaltSync(saltCrypt);

            let newUser = User.build({
                email,
                password: await bcrypt.hashSync(password, salt),
            });

            await newUser.save();

            res.json(newUser);

        }
        catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    },

    login: async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;

            const user = await User.findOne({
                where: {
                    email,
                }
            });

            if (user && await bcrypt.compareSync(password, user.password)) {
                req.session.user = user.get({
                    plain: true
                });
                delete req.session.user.password;
                res.json({
                    logged: true,
                    info: req.session.user
                });
            } else {
                res.json('error 401 unauthorized');
                res.status(401).end();
            };
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }

    },

    logout: async (req, res) => {
        try {
            req.session.destroy();
            res.json({
                logged: false
            });
        } catch (error) {
            console.trace(error);
            res.status(500).json(error);
        }
    }
};

module.exports = userController;