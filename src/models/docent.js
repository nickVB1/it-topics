const mongoose = require('mongoose');
const campus = require('./campus');
const Campus = require('./campus');

const DecentSchema = new mongoose.Schema({
    voornaam: { type: String },
    acternaam: { type: String },
    campussen: [{ type: mongoose.Schema.Types.ObjectId, ref: Campus }],
}, {
    collection: 'docent'

})

module.exports = mongoose.model('Docent', DocentSchema);