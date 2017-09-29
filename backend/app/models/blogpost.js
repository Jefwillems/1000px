const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    contents: {
        type: String,
        required: true
    },
    Author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BlogPost', BlogPostSchema)