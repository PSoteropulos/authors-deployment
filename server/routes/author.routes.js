const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/allAuthors', AuthorController.getAllAuthors)
    app.get('/api/author/:id', AuthorController.getOneAuthor)
    app.post('/api/addAuthor', AuthorController.addAuthor)
    app.put('/api/update/:id', AuthorController.updateAuthor)
    app.delete('/api/delete/:id', AuthorController.deleteAuthor)
}