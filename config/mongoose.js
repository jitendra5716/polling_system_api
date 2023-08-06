const mongoose = require('mongoose');

const uri = "mongodb+srv://poll:db@cluster0.nw6cmgp.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri);

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