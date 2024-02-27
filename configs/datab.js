const mongoose=require("mongoose");

const dbconnection= mongoose.connect("mongodb+srv://mdamir4298:mdamir4298@cluster0.amf5oao.mongodb.net/bitverse");


module.exports={dbconnection}