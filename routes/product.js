const express = require("express");
const router = express.Router();

const productController=require('../controller/productController');

router.post("/create", function (req, res) {
    console.log("Product Added successfully !!",req.body);
    productController.saveData(req.body);
    res.send("Product Added successfully !!");
});

router.get("/read", function (req, res) {
    console.log('Your All Product in databases !!');
    const data=productController.getAlldata();
    data.then((da)=>{
        console.log("Your data ",typeof(da));
        res.send(da);
    })

});

router.put('/update',function(req,res){
    console.log('Product Update Successfully !!')
    productController.updateData(req.body);
    res.send("Product Update Successfully !!");
});

router.delete("/delete",function(req,res){
    console.log('Product Deleted Deleted');
    productController.deleteData(req.body);
    res.send("Product Deleted Deleted");
});

module.exports = router;
