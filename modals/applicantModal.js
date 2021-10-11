const mongoose = require('mongoose');
const validator = require('validator');

const applicantSchema = new mongoose.Schema({
    houseId:{
        type:String
    },
    firstname:{
        type:String,
        required: [true, 'Enter firstname.'],
        min:1,
        max:20
    },
    lastname:{
        type:String,
        required: [true, 'Enter lastname.'],
        min:1,
        max:20
    },
    email:{
        type:String,
        required: [true, 'Enter an email address.'],
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email address.']
    },
    gender:{
        type:String
    }
},
{
    timestamps:true
},
{
    collection:'applicant'
});
// model creation
const applicantModel = mongoose.model('applicant',applicantSchema)
module.exports = applicantModel
