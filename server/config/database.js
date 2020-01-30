const mongoose = require('mongoose');

const config = require('./settings')

mongoose.connect(config.db, {useNewUrlParser: true});

module.exports = mongoose