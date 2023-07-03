const express = require("express");
const {PORT} = require('./config/serverConfig');
const Routes = require('./routes');
const database = require('./config/database')
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api', Routes)


app.listen(PORT, async ()=>{
    console.log(`Server is running on ${PORT}`)
    await database();
    console.log("Database connected");
})