const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require("bcrypt")


router.post("/",async(req,res)=>{
    const {username, password}=req.body;
    bcrypt.hash(password,10).then((hash)=>{
        Users.create({
            username: username,
            password: hash,

        })
        res.json("Success created!!");
    })
})


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await Users.findOne({
        where: { username: username },
      });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Log untuk debugging
      console.log('Input Password:', password);
      console.log('Stored Hash:', user.password);
  
      const match = await bcrypt.compare(password, user.password);
  
      if (!match) {
        return res.json({ error: 'Wrong password!!' });
      }
  
      res.json('Success');
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



module.exports = router