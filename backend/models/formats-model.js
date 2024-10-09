const mongoose = require('mongoose');

const formatSchema = mongoose.Schema(
    {
        format:{
            type : String,
            lowercase : true,
            required : true
        }
    },
    {
        timestamps: true
    }
    );

    module.exports = mongoose.model('formats', formatSchema);