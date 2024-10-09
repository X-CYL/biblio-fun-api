const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
    {
        creator_id : {
            type : String,
            lowercase : true,
            required : true
        },
        author_id : {
            type : String,
            lowercase: true,
            required : true
        },
        category_id :
        {
           type : String,
           lowercase : true,
           required : true 
        },
        format_id : {
            type : String,
            lowercase : true,
            required : true
        },
        bookTitle : {
            type : String,
            lowercase : true,
            required : true,
            maxlength : 50
        },
        author : {
            nameAuthor :{
                type : String,
                lowercase : true,
                required : true,
                maxlength : 30
            },
            surnameAuthor : {
                type : String,
                lowercase : true,
                required : true,
                maxlength : 20
            }
        },
        edition : {
            editionName : {
                type : String,
                lowercase : true,
                required : true,
                maxlength : 30
            },
            editionDate : {
                type : String,
                lowercase : true,
                required : true,
                maxlength : 12
            },
            pagesNumbers : {
                type : Number,
                required : true
            }
        },
        sbeNumber :{
            type : String,
            lowercase : true,
            required : true,
            maxlength : 30
        },
        sharing : {
            type : Boolean,
            required : false
        },
        picPage : {         //ecrire ici le lien vers la photo de la couverture
            type : String,
            lowercase : true,
            required : true
        },
        pitch : {
            type : String,
            lowercase : true,
            required : true,
            maxlength : 200
        },
    },
    {
        likers : [String]
    },
    {
        date : {
            type : Date,
            default : now()
        }
    }
    );

    module.exports = mongoose.model('books', bookSchema);