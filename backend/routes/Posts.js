const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

router.get("/",async(req,res)=>{
    const listOfPosts = await Posts.findAll()
    res.json(listOfPosts);
})


router.get('/byID/:id',async(req,res)=>{
    const id = req.params.id
    const post = await Posts.findByPk(id);
    res.json(post);
})


router.post("/",async(req,res)=>{
    try{
        const post= req.body; //ini merupakan data yang dikirim klien dalam req json.
         const newPost=await Posts.create(post); //ini merupakan metode dari sequelize untuk membuat entri baru
         res.json(newPost); //res.json digunakan agar klien menerima respons dalam bentuk JSON, yang mudah diproses.
    }catch(error){
        console.error(error);
        res.status(500).json({error});
    }
  

})





module.exports = router