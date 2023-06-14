
const userSchema = require('../models/userData');

const totalusers = async (req ,res) => {
    const newusers = new userSchema({
        name : req.body.name,
        age : req.body.age,
        city : req.body.city
    });
 
    try {
      await newusers.save();
      res.status(200).json(newusers);
    }catch(err){
     res.status(400).json({message : "Error" ,err})
    } 
}

const getuserdata = async(req ,res) => {
    try{
        const userDatas = await userSchema.find();
        res.status(200).json(userDatas);
    }catch(err) {
        res.status(400).json({message : "Error" ,err});
    }
}

module.exports.totalusers = totalusers;
module.exports.getuserdata = getuserdata;