const mongoose = require('mongoose');
const schema = mongoose.Schema;
//create a schema or object mapping

const friendSchema = new schema
(
    {

    
    friendName :
    {
        type:String
    } , 
    
    email:
    {
        type:String
    },
    age :
    {
        type:Number
    }
    })

const friendModel =mongoose.model("friendModel" , friendSchema);
module.exports = {friendModel};