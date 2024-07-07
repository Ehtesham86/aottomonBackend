const express = require("express");
const router = express.Router();
const Beds = require("../models/beds");
const mongoose = require("mongoose");
const checkAuth=require('../middleware/check-auth')
const cloudinary=require('cloudinary').v2;
cloudinary.config({ 
  cloud_name: 'alpja', 
  api_key: '556517137364383', 
  api_secret: 'FCqYSd-J1Kew_VgMCOBZSIcqnJY'

});

router.get("/", (req, res, next) => {
    Beds.find()
    .then((result) => {
      res.status(200).json({
        bedsData: result,
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

  const beds = new Beds({
    _id:new mongoose.Types.ObjectId(),
    MemoryFoam:req.body.MemoryFoam,
    PocketSprung:req.body.PocketSprung,
    Orthopaedic:req.body.Orthopaedic,
    Latex:req.body.Latex,
    Miracoil:req.body.Miracoil,
    NaturalFillings:req.body.NaturalFillings,
    CutBedMattresses:req.body.CutBedMattresses,
    KidsMattresses:req.body.KidsMattresses,
    NextDayMattresses:req.body.NextDayMattresses,
    SuperKingsBeds:req.body.SuperKingsBeds,
    KingSizeBeds:req.body.KingSizeBeds,
    DoubleBeds:req.body.DoubleBeds,
    SmallDoubleBeds:req.body.SmallDoubleBeds,
    SingleBeds:req.body.SingleBeds,
    SmallSingleBeds:req.body.SmallSingleBeds,
    name:req.body.name,
 
    price:req.body.price,
    description:req.body.description,

    countInStock:req.body.countInStock,
    ShopBy:req.body.ShopBy,
    Discount:req.body.Discount,

    




     

    imageUrl:result.url
  })
  beds.save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newBeds: result,
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
  Beds.findById(req.params.id).then(result=>{
res.status(200).json({
    beds:result
})
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    })
  })
});
router.delete('/:id',(req,res,next)=>{
Beds.remove({_id:req.params.id})
.then(result=>{
    res.status(200).json({
        message:"Beds deleted",
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
Beds.findOneAndUpdate({
    _id:req.params.id
},{
    MemoryFoam:req.body.MemoryFoam,
    PocketSprung:req.body.PocketSprung,
    Orthopaedic:req.body.Orthopaedic,
    Latex:req.body.Latex,
    Miracoil:req.body.Miracoil,
    NaturalFillings:req.body.NaturalFillings,
    CutBedMattresses:req.body.CutBedMattresses,
    KidsMattresses:req.body.KidsMattresses,
    NextDayMattresses:req.body.NextDayMattresses,
    SuperKingsBeds:req.body.SuperKingsBeds,
    KingSizeBeds:req.body.KingSizeBeds,
    DoubleBeds:req.body.DoubleBeds,
    SmallDoubleBeds:req.body.SmallDoubleBeds,
    SingleBeds:req.body.SingleBeds,
    SmallSingleBeds:req.body.SmallSingleBeds,
    name:req.body.name,
    Discount:req.body.Discount,

    price:req.body.price,
    description:req.body.description,

    countInStock:req.body.countInStock,
    ShopBy:req.body.ShopBy,
  
    imageUrl:req.body.imageUrl
    }).then(result=>{
        res.status(200).json({
            updated_beds:result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})
module.exports = router;
