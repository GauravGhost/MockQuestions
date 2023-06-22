const express = require("express");
const {PORT} = require('./config/serverConfig');
const Routes = require('./routes');
const cors = require('cors')
const { urlencoded, json } = require("body-parser");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', Routes)


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})