const mongoose=require('mongoose')

const bedSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    MemoryFoam:String,
    PocketSprung:String,
    Orthopaedic:String,
    Latex:String,
    Miracoil:String,
    NaturalFillings:String,
    CutBedMattresses:String,
    KidsMattresses:String,
    NextDayMattresses:String,
    SuperKingsBeds:String,
    KingSizeBeds:String,
    DoubleBeds:String,
    SmallDoubleBeds:String,
    SingleBeds:String,
    SmallSingleBeds:String,
    name:String,
    price:String,
    description:String,
    countInStock:Number,
    ShopBy:String,
    Discount:String,

    imageUrl:String
})
module.exports=mongoose.model('Beds',bedSchema)