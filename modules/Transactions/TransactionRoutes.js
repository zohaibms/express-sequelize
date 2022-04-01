module.exports = function (app) {
const sequelize = require('../../database');
const Transactions = require("./Transactions");
const Categories = require("./Categories");
const SubCategories = require("./SubCategories");
const { QueryTypes } = require('@sequelize/core');

app.get("/trx", async () => {
    const trans = await Transactions.findAll();
    res.send(trans);
  });

  app.get("/trxcategories", async (req,res) => {
    const categories = await sequelize.query(
      "Select * from Categories",{ type: QueryTypes.SELECT }
    );
    res.send(categories);
  });

  app.get("/trxsubcategories", async () => {
    const subCategories = await SubCategories.findAll();
    res.send(subCategories);
  });

};