//const express = require('express');

module.exports = function (app) {

    const userController = require('../controllers/user-controller')(app)

    app.post('/createUser', userController.createUser)
    app.get('/retrieveUser', userController.retrieveUser)
    app.get('/retrieveUserById/:id', userController.retrieveUserById)
    app.put('/updateUser/:id', userController.updateUser)
    app.delete('/deleteUser/:id', userController.deleteUser)
}

/**
 * @api {get} /retrieveUser/:id Request User information
 * @apiDescription Is used to list the user information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} Object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Josh",
 *       "email": "josh.handerson@gmail.com"
 *       "password" : "123456"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 * 
 */


 /**
  * 
 * @api {post} /createUser/ Include an user
 * @apiDescription Is used to create an user
 * @apiName Post
 * @apiGroup User
 *
 * @apiParam {String} name Name of the user
 * @apiParam {String} email E-mail of the user
 * @apiParam {string} password Password of the user
 *
 * @apiSuccess {String} Object
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Josh",
 *       "email": "josh.handerson@gmail.com"
 *       "password" : "123456"
 *     }
 *
 * @apiError DuplicatedUser The e-mail inserted already exists.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 * 
 */


