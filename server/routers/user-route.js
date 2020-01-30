//const express = require('express');

module.exports = function (app) {

    const userController = require('../controllers/user-controller')(app)

    app.post('/createUser', userController.createUser)
    app.get('/retrieveUser', userController.retrieveUser)
}