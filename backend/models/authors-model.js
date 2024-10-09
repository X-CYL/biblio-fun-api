const mongoose = require('mongoose');

const authorSchema = mongoose.Schema(
    {
        email : {
            type : String,
            lowercase : true,
            required : true,
            maxlength : 50,
            unique : true
        },
        biography : {
            type : String,
            lowercase : true,
            required : true
        },
        personnalUrlSite : {
            type : String,
            lowercase : true,
            required : false,
            unique : true
        }
    },
    {
        timestamps : true
    }
    );

    module.exports = mongoose.model('authors', authorSchema);