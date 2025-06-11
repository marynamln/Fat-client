const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    author: String,
    year: Number,
    genre: String,
    pages: Number
});

module.exports = mongoose.model('Book', bookSchema);