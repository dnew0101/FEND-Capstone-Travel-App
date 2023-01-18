const dotenv = require('dotenv');
dotenv.config();
let path = require('path');
const port = 8000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();

//middleware--
app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//APIS
//Geonames constructors
const username = process.env.USER_NAME;


//routes
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});


//listening
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
})