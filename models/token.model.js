const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  img: { type: String, required: true },
  tokenName: { type: String, required: true },
  symbol: { type: String, required: true },
  decimals: { type: Number, required: true },
  marketcap: { type: Number, required: true },
  chain: { type: String, required: true },
});


const tokenModel= mongoose.model("datas",tokenSchema)

module.exports={tokenModel}
