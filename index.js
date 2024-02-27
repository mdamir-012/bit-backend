const express=require("express");
const { connection, dbconnection } = require("./configs/datab");
const { tokenController } = require("./routes/token.route");
const cors = require('cors');
const app=express();

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send({msg:"welcome to the bitverse page"});
})

app.use("/token",tokenController)

app.listen(8080,async(req,res)=>{
    try{
        console.log(`connected to mongodb successfully`)

    }
    catch(err){
        await dbconnection;
        console.log(err)
        console.log("error while connecting")
    }
    console.log(`listening on port 8080`);
})