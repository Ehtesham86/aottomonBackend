const mongoose=require('mongoose')

const salesSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    Discount:String,

    price:String,
    description:String,
    countInStock:Number,
    type:String,
    ShopBy:String,
    SalesTypes:String,
    DivanBeds:String,
    DivanBasesOnly:String,
    BedFrames:String,
    Mattresses:String,
    Headboards:String,
    Furniture:String,
    AllSaleProducts:String,
    DivanBases:String,
    BedFrames:String,
    Headboards:String,
    Furniture:String,
    ClearanceBundles:String,

   
    imageUrl:String
})
module.exports=mongoose.model('Sales',salesSchema)