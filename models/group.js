const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    content : {
        type : String
    }
},{
    timestamps : true
})

const groupSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    users : [{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }],
    post : [postSchema],
    slogan : {
        type : String,
        required : true
    },
    tips : [{
        type : String,
        required : true
    }]

},{
    timestamps : true,
})

module.exports = mongoose.model('Group', groupSchema);