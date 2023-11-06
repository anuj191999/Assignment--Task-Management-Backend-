const express = require("express");
const router = express.Router();

router.post('/login',function(req,res){

    console.log('Details for Login ',req.body);
    res.redirect('/');
})

router.post('/register',function(req,res){

    console.log("Details for Register ",req.body);
    res.send("you are Register Successfully");
});

module.exports=router;

