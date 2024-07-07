const mongoose=require('mongoose')

const mattressesSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    price:String,
    description:String,
    countInStock:Number,
    type:String,
    ShopBy:String,
    MemoryFoam:String,
    PocketSprung:String,
    Orthopaedic:String,
    Latex:String,
    CutBedMattresses:String,
    KidsMattresses:String,
    NextDayMattresses:String,
    ExtraFirm:String,
    Firm:String,
    MediumFirm:String,
    Medium:String,
    SoftFirm:String,
    SuperKing:String,
    KingSize:String,
    Double:String,
    SmallDouble:String,
    Single:String,
    SmallSingle:String,
    European:String,
    imageUrl:String
})
module.exports=mongoose.model('Mattresses',mattressesSchema)