const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema({
    img:{
        type:String
    },
    house_type:{
        type:String
    },
    house_name:{
        type:String
    },
    address:{
        type:String
    },
    bedroom:{
        type:String
    },
    bathroom:{
        type:String
    },
    rent:{
        type:String
    }
},
{
    collection:'house'
});
// model creation
const houseModel = mongoose.model('house',houseSchema)
module.exports = houseModel
