const noteDB = require('../db/dbNotes.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDB));
}