const mongoose=require('mongoose')

const accessoriesSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    

    Pillows:String,
    Duvetts:String,
    MattressToppers:String,
    Headboards:String,
    Discount:String,


   
    imageUrl:String
})
module.exports=mongoose.model('Accessories',accessoriesSchema)