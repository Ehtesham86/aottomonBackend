const express = require("express");
const router = express.Router();
const Mattresses = require("../models/mattresses");
const mongoose = require("mongoose");
const checkAuth=require('../middleware/check-auth')
const cloudinary=require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'alpja', 
  api_key: '556517137364383', 
  api_secret: 'FCqYSd-J1Kew_VgMCOBZSIcqnJY'

});

router.get("/", (req, res, next) => {
    Mattresses.find()
    .then((result) => {
      res.status(200).json({
        mattressesData: result,
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

  const mattresses = new Mattresses({
    _id:new mongoose.Types.ObjectId(),

    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    countInStock:req.body.countInStock,
    type:req.body.type,
    ShopBy:req.body.ShopBy,
    MemoryFoam:req.body.MemoryFoam,
    PocketSprung:req.body.PocketSprung,
    Orthopaedic:req.body.Orthopaedic,
    Latex:req.body.Latex,
    CutBedMattresses:req.body.CutBedMattresses,
    KidsMattresses:req.body.KidsMattresses,
    NextDayMattresses:req.body.NextDayMattresses,
    ExtraFirm:req.body.ExtraFirm,
    Firm:req.body.Firm,
    Medium:req.body.Medium,
    MediumFirm:req.body.MediumFirm,
    SoftFirm:req.body.SoftFirm,
    SuperKing:req.body.SuperKing,
    KingSize:req.body.KingSize,
    Double:req.body.Double,
    SmallDouble:req.body.SmallDouble,
    Single:req.body.Single,
    SmallSingle:req.body.SmallSingle,
    European:req.body.European,
   
    Discount:req.body.Discount,

    imageUrl:result.url
  })
  mattresses.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newMattresses: result,
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
  Mattresses.findById(req.params.id).then(result=>{
res.status(200).json({
    mattresses:result
})
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
  })
});
router.delete('/:id',(req,res,next)=>{
Mattresses.remove({_id:req.params.id})
.then(result=>{
    res.status(200).json({
        message:"Mattresses deleted",
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
Mattresses.findOneAndUpdate({
    _id:req.params.id
},{
    name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    countInStock:req.body.countInStock,
    type:req.body.type,
    ShopBy:req.body.ShopBy,
    MemoryFoam:req.body.MemoryFoam,
    PocketSprung:req.body.PocketSprung,
    Orthopaedic:req.body.Orthopaedic,
    Latex:req.body.Latex,
    CutBedMattresses:req.body.CutBedMattresses,
    KidsMattresses:req.body.KidsMattresses,
    NextDayMattresses:req.body.NextDayMattresses,
    ExtraFirm:req.body.ExtraFirm,
    Firm:req.body.Firm,
    Medium:req.body.Medium,
    MediumFirm:req.body.MediumFirm,
    SoftFirm:req.body.SoftFirm,
    SuperKing:req.body.SuperKing,
    KingSize:req.body.KingSize,
    Double:req.body.Double,
    SmallDouble:req.body.SmallDouble,
    Single:req.body.Single,
    SmallSingle:req.body.SmallSingle,
    European:req.body.European,
    Discount:req.body.Discount,

    imageUrl:req.body.imageUrl
    }).then(result=>{
        res.status(200).json({
            updated_mattresses:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports = router;