const express = require("express");
const router = express.Router();

router.post("/create", function (req, res) {
    console.log("Product Added successfully !!",req.body);
    res.send("Product Added successfully !!");
});

router.get("/read", function (req, res) {
    console.log('Your All Product in databases !!');
    res.send("Your All Product in databases !!");
});

router.put('/update',function(req,res){
    console.log('Product Update Successfully !!')
    res.send("Product Update Successfully !!");
});

router.delete("/delete",function(req,res){
    console.log('Product Deleted Deleted');
    res.send("Product Deleted Deleted");
});

module.exports = router;
