const BookDAO = require('../dao/bookDAO');

class BookController {
    static async getAll(req, res) {
        const books = await BookDAO.getAllBooks();
        res.json(books);
    }

    static async getById(req, res) {
        try {
            const book = await BookDAO.getBookById(req.params.id);
            if (!book) return res.status(404).json({ message: 'Запис не знайдено' });
            res.json(book);
        } catch {
            res.status(400).json({ message: 'Неправильний формат ID' });
        }
    }

    static async create(req, res) {
        try {
            const newBook = await BookDAO.createBook(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).json({ message: "Книга з такою назвою вже існує." });
            }
            res.status(500).json({ message: "Помилка сервера", error });
        }
    }

    static async update(req, res) {
        try {
            const updatedBook = await BookDAO.updateBook(req.params.id, req.body);
            if (!updatedBook) return res.status(404).json({ message: 'Запис не знайдено' });
            res.json(updatedBook);
        } catch {
            res.status(400).json({ message: 'Неправильний формат ID' });
        }
    }

    static async delete(req, res) {
        try {
            const deletedBook = await BookDAO.deleteBook(req.params.id);
            if (!deletedBook) return res.status(404).json({ message: 'Запис не знайдено' });
            res.json({ message: 'Запис видалено' });
        } catch {
            res.status(400).json({ message: 'Неправильний формат ID' });
        }
    }

    static async findByTitle(req, res) {
        try {
            const books = await BookDAO.findByTitle(new RegExp(req.params.title, 'i'));
            res.json(books);
        } catch {
            res.status(500).json({ message: 'Помилка під час пошуку за назвою' });
        }
    }

    static async findByAuthor(req, res) {
        try {
            const books = await BookDAO.findByAuthor(new RegExp(req.params.author, 'i'));
            res.json(books);
        } catch {
            res.status(500).json({ message: 'Помилка під час пошуку за автором' });
        }
    }

    static async findByYear(req, res) {
        try {
            const books = await BookDAO.findByYear(req.params.year);
            res.json(books);
        } catch {
            res.status(500).json({ message: 'Помилка під час пошуку за роком' });
        }
    }

    static async findByGenre(req, res) {
        try {
            const books = await BookDAO.findByGenre(new RegExp(req.params.genre, 'i'));
            res.json(books);
        } catch {
            res.status(500).json({ message: 'Помилка під час пошуку за жанром' });
        }
    }

}

module.exports = BookController;