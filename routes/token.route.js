const { tokenModel } = require("../models/token.model");
const { Router } = require("express");

const tokenController = Router();

tokenController.get("/read", async (req, res) => {
  const tokenData = await tokenModel.find();
  res.status(200).send({ msg: "all tokens", tokenData });
  console.log(tokenData);
});

tokenController.post("/create", async (req, res) => {
  const { img, tokenName, symbol, decimals, marketcap, chain } = req.body;

  const tokendata = new tokenModel({
    img,
    tokenName,
    symbol,
    decimals,
    marketcap,
    chain,
  });
  try {
    await tokendata.save();
    res.json({ msg: "added" });
  } catch (err) {
    console.log(err);
    res.json({ msg: "something went wrong" });
  }
});

// delete

// pagination functionality
tokenController.get("/", async (req, res) => {
  let page = req?.query?.page || 1;
  let limit = req?.query?.limit || 6;

  let skip = (page - 1) * limit;
  skip = skip>=6?0:skip

  const tokenData = await tokenModel.find().skip(skip).limit(limit);
  res.status(200).send({ msg: "pagination datas", tokenData });
});

module.exports = { tokenController };
