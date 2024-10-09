const mongoose = require('mongoose');

const creatorSchema = mongoose.Schema(
    {
        email : {
            type : String,
            lowercase : true,
            required : true,
            unique :true,
            maxlength : 50
        },
        pseudo : {
            type : String,
            lowercase : true,
            required : true,
            maxlength : 15
        },
        password : {
            type : String,
            required : true,
            minlength : 8
        },
    },
    {
        timestamps: true
    }
    );

    module.exports = mongoose.model('creators', creatorSchema);