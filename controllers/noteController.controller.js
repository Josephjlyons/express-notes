  
const notes = require("../db/dbNotes");

class Note {

    update({ id, ...payload }) {
        let index;
        let update = notes.find((note, i) => {
            index = i;
            note.id === id
        });
        update = {
            id: id,
            ...payload
        };
        return notes;
    }

    // create

    create(payload) {
        notes.push(payload);
        return notes;
    }

    // delete

    remove(id) {
        let index;
        const note = notes.find((t, i) => {
            index = i;
            t.id === id
        });
        notes.splice(index, 1);
    }

    // read

    read(id) {
        return notes.find((t) => t.id === id);
    }

    list() {
        return notes;
    }

}

module.exports = new Note();