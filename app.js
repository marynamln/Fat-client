const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const path = require('path');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Підключено до MongoDB'))
    .catch(err => console.error('Помилка підключення:', err));

app.use('/', bookRoutes);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get(['/admin', '/admin-login', '/search'], (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(7777, () => console.log('Сервер запущено на порту 7777'));