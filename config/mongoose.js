const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

const MONGO_URI = "mongodb+srv://poll:db@cluster0.nw6cmgp.mongodb.net/"

mongoose.connect(MONGO_URI);

const db = mongoose.connection;



db.on("Error",console.error.bind(console,"Error in connecting to database"));

db.once('open',(err)=>{
    if(err){
        console.log("Error in mongodb");
        return;
    }
    console.log("Successfully Connected to database");
});

module.exports = db;