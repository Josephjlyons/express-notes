const express = require('express');
const routes = require('./public/routes');
// const uuid = require('uuid');
// const fs = require('fs');
// const path = require('path');   will use some of these I think at some point...maybe...
// const axios = require('axios');
const htmlRoutes = require('./public/routes/htmlRoutes');



const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Static Folder

app.use(express.static('public'));
app.use("/api/notes", routes); // make a new route if needed to fit file structure
app.use('/', routes);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})