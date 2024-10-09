const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
    {
        category : {
            type : String,
            lowercase : true,
            required : true,
            maxlength : 30
        }
    },
    {
        date : {
            type : Date,
            default : now()
        }
    }
    );

    module.exports = mongoose.model('categories', categorySchema);