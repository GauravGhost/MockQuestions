const mongoose = require('mongoose')
const { MONGODB_URL } = require('./serverConfig.js');

const connect = async() => {
    await mongoose.connect(MONGODB_URL);
}


module.exports = connect;