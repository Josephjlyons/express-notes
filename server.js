const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// const uuid = require('uuid');
const path = require('path');   

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', apiRoutes); 
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})