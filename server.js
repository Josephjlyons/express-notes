const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
// const uuid = require('uuid');
const path = require('path');   
const axios = require('axios');
const htmlRoutes = require('./routes/htmlRoutes');



const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Static Folder

app.use("/", apiRoutes); // make a new route if needed to fit file structure?
app.use(express.static('public'));
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})