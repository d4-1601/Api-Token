const mongoose = require('mongoose');
require('dotenv').config()

const DB_URI = process.env.DBURI;

mongoose.connect(`mongodb://${DB_URI}/venturesDB`);
console.log('Successfully connected to mongooseDB');

module.exports = { mongoose };