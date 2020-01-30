const express = require('express');
const ctrlOAuth = require('../controllers/oauth')

module.exports = function (app) {
  const router = express.Router();


  router.get('/', ctrlOAuth.Status);

  router.post('/token', ctrlOAuth.Token);

  app.use('/oauth', router);
}