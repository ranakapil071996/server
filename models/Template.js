const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const Template = new Schema({
    name: { type: String, trim: true, required: true},
    content: { type: String, trim: true, required: true},
    startDate: { type: Date, required: true} 
},{
    timestamps: true
});

module.exports = mongoose.model('template', Template)
