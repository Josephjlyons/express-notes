const router = require('express').Router();
const notes = require('../db/db.json');
const fs = require('fs');
const uuid = require('uuid');


router.get('/api/notes', (req, res) => {
    return res.send(notes);
});

router.post('/api/notes', (req, res) => {
    let noteId = uuid.v4();
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
    };

    fs.readFile('/db/db.json', (err, data) => {
        if (err) throw err;
        let parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(parsedNotes), err => {
            if (err) throw err;
            res.send(notes)
        });
    });
});

router.delete('api/notes/:id', (req, res) => {
    let noteId = req.params.id;
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        let parsedNotes = JSON.parse(data);
        let filteredNotes = parsedNotes.filter((note) => note.id != noteId);

        fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), err => {
            if (err) throw err;
            res.send(notes);
        });
    });
});

module.exports = router;