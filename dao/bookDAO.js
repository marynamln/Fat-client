const Book = require('../models/bookModel');

class BookDAO {
    static async getAllBooks() {
        return await Book.find();
    }

    static async getBookById(id) {
        return await Book.findById(id);
    }

    static async createBook(bookData) {
        const book = new Book(bookData);
        return await book.save();
    }

    static async updateBook(id, bookData) {
        return await Book.findByIdAndUpdate(id, bookData, { new: true });
    }

    static async deleteBook(id) {
        return await Book.findByIdAndDelete(id);
    }

    static async findByTitle(title) {
        return await Book.find({title: title});
    }

    static async findByAuthor(author) {
        return await Book.find({author: author});
    }

    static async findByYear(year) {
        return await Book.find({year: year});
    }

    static async findByGenre(genre) {
        return await Book.find({genre: genre});
    }

}

module.exports = BookDAO;
