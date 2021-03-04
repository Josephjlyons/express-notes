// const router = require("express").Router();
// const noteController = require("../../controllers/noteController.controller");

// // Handles Get Requests

// router.get("/", async (req, res) => {
//     try {

//         const notes = await noteController.list();
//         res.send(notes);

//     } catch (err) {
//         res.status(500).end();
//     }
// });

// router.get("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const note = await noteController.read(id);
//         res.send(notes);

//     } catch (err) {
//         res.status(500).end();
//     }
// });


// // Handles Put Requests

// router.put("/:id", async (req, res) => {
//     try {
//         const update = req.body;
//         const { id } = req.params;
//         const note = await noteController.update({ id, ...update });
//         res.send(notes);

//     } catch (err) {
//         console.log(err);
//         res.status(500).end();
//     }
// });

// // Handles Post Requests

// router.post("/", async (req, res) => {

//     try {
//         const create = req.body;
//         const note = await noteController.create(create);
//         res.send(notes);

//     } catch (err) {
//         res.status(500).end();
//     }
// });

// // Handles Delete Request

// router.delete("/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const notes = await noteController.remove(id);
//         res.send(notes);

//     } catch (err) {
//         res.status(500).end();
//     }
// });

// router.get("/static", (req, res) => {

//     res.sendFile(__dirname + "/index.html");
// })

// module.exports = router;