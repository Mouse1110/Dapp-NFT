const mongoose = require('mongoose');
const objectSchema = new mongoose.Schema({
    name:String,
    point:String,
    tokenId:String,
    hash:String
});
module.exports = mongoose.model('object',objectSchema);