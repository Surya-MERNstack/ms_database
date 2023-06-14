const express = require('express');
// const fs = require('fs');
const mongoose = require('mongoose')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended :false}));

require('dotenv').config();
const dbul = process.env.DB_URL
mongoose.connect(dbul , {useNewUrlParser : true});

const connect = mongoose.connection;

try{
  connect.on('open' , () => {
  console.log('Mongoo is connected');
  })
}catch(err) {
  console.log('it is not connectecd' ,err)
}


const router = require('./rotuer/rotuer');

app.use('/',router);


app.listen(3035, () => {
  console.log('Server is running on http://localhost:3035');
});
