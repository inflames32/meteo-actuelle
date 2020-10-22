const express = require('express');
const path = require('path');

const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

/* Users */

router.route('/signup')
    .post(userController.createUser);

router.route('/login')
    .post(userController.login);

router.route('/logout')
    .post(userController.logout);

router.route('/user/:id')
    .get(userController.getOneUser)
    .delete(userController.deleteUser);

router.use((req, res) => {
    res.status(404).json("erreur");
});

module.exports = router;