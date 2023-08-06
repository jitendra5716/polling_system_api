const mongoose = require('mongoose');


const optionSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    votes:{
        type:Number
    }
},
{
    timestamps:true
});

const Option = mongoose.model('Option',optionSchema);

module.exports = Option;