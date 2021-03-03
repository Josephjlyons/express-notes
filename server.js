const express = require('express');
const routes = require('./public/routes/routes');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
const axios = require('axios');



const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Static Folder

app.use(express.static('public'));

app.use("/api/notes", routes); // make a new route if needed to fit file structure


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})