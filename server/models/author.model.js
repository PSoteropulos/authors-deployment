const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Author name is required."],
        minLength:[3, "Author name must be longer than 2 characters."],
        maxLength:[50," Author name can not exceed 50 characters."]
    }
}, {timestamps:true });

module.exports = mongoose.model('Author', AuthorSchema)