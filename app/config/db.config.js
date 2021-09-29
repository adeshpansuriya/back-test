const mongoose = require('mongoose')
const connect = 'mongodb+srv://admin:admin@cluster0.ddqua.mongodb.net/dbset?retryWrites=true&w=majority';

const connection = mongoose.connect(connect, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Databse connecticon successfully')
}).catch((err) => {
    console.log("Database connection faild", err);
})
module.exports = connection