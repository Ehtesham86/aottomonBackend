const express = require("express");
const router = express.Router();
const Sale = require("../models/sales");
const mongoose = require("mongoose");
const checkAuth=require('../middleware/check-auth')
const cloudinary=require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'alpja', 
  api_key: '556517137364383', 
  api_secret: 'FCqYSd-J1Kew_VgMCOBZSIcqnJY'

});

router.get("/", (req, res, next) => {
    Sale.find()
    .then((result) => {
      res.status(200).json({
        salesData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.post("/",
// checkAuth,
(req, res, next) => {
  const file=req.files.photo;
  cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
    console.log(result.url);

  const sales = new Sale({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    countInStock:req.body.countInStock,
    type:req.body.type,
    ShopBy:req.body.ShopBy,
    SalesTypes:req.body.SalesTypes,
    DivanBeds:req.body.DivanBeds,
    DivanBasesOnly:req.body.DivanBasesOnly,
    BedFrames:req.body.BedFrames,
    Mattresses:req.body.Mattresses,
    Headboards:req.body.Headboards,
    Furniture:req.body.Furniture,
    AllSaleProducts:req.body.AllSaleProducts,
    DivanBases:req.body.DivanBases,
    BedFrames:req.body.BedFrames,
    Headboards:req.body.Headboards,
    Furniture:req.body.Furniture,
    ClearanceBundles:req.body.ClearanceBundles,
    Discount:req.body.Discount,

  
    imageUrl:result.url
  })
  sales.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newSale: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    })  
  })
});
router.get("/:id", (req, res, next) => {
  console.log(req.params.id);
  Sale.findById(req.params.id).then(result=>{
res.status(200).json({
    sales:result
})
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
  })
});
router.delete('/:id',(req,res,next)=>{
Sale.remove({_id:req.params.id})
.then(result=>{
    res.status(200).json({
        message:"Sales deleted",
        result:result
    })
}).catch(err=>{
    res.status(500).json({
        error:err
    })
})
})
router.put('/:id',(req,res,next)=>{
console.log(req.params.id);
Sale.findOneAndUpdate({
    _id:req.params.id
},{

    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    countInStock:req.body.countInStock,
    type:req.body.type,
    ShopBy:req.body.ShopBy,
    SalesTypes:req.body.SalesTypes,
    DivanBeds:req.body.DivanBeds,
    DivanBasesOnly:req.body.DivanBasesOnly,
    BedFrames:req.body.BedFrames,
    Mattresses:req.body.Mattresses,
    Headboards:req.body.Headboards,
    Furniture:req.body.Furniture,
    AllSaleProducts:req.body.AllSaleProducts,
    DivanBases:req.body.DivanBases,
    BedFrames:req.body.BedFrames,
    Headboards:req.body.Headboards,
    Furniture:req.body.Furniture,
    ClearanceBundles:req.body.ClearanceBundles,
    Discount:req.body.Discount,

    imageUrl:req.body.imageUrl
    }).then(result=>{
        res.status(200).json({
            updated_sales:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports = router;