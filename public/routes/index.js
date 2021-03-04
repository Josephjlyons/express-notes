const router = require("express").Router();
const todoController = require("../../controllers/noteController.controller");

// Handles Get Requests

router.get("/", async (req, res) => {
    try {

        const notes = await todoController.list();
        res.send(notes);

    } catch (err) {
        res.status(500).end();
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await todoController.read(id);
        res.send(todo);

    } catch (err) {
        res.status(500).end();
    }
});


// Handles Put Requests

router.put("/:id", async (req, res) => {
    try {
        const update = req.body;
        const { id } = req.params;
        const todo = await todoController.update({ id, ...update });
        res.send(todo);

    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
});

// Handles Post Requests

router.post("/", async (req, res) => {

    try {
        const create = req.body;
        const todo = await todoController.create(create);
        res.send(todo);

    } catch (err) {
        res.status(500).end();
    }
});

// Handles Delete Request

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const notes = await todoController.remove(id);
        res.send(notes);

    } catch (err) {
        res.status(500).end();
    }
});

router.get("/static", (req, res) => {

    res.sendFile(__dirname + "/index.html");
})

module.exports = router;