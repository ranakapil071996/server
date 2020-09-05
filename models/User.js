const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const Template = new Schema({
    name: String,
    email: String
},{
    timestamps: true
});

module.exports = mongoose.model('users', Template)
