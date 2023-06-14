const express = require('express');

const rotuer = express.Router();
const userData = require('../collectors/user_con');
rotuer.post('/data' ,userData.totalusers);
rotuer.get('/data',userData.getuserdata);

module.exports = rotuer;