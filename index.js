//important Imports

require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const db = require('./config/mongoose');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(expressLayout);

// view Engine 
app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//routes

app.use('/',require('./routes/index'));




//listener

app.listen(PORT,(err)=>{
    if(err){
        return console.log("Error in running the server");
    }
    console.log("Server is running on port ",PORT);
})