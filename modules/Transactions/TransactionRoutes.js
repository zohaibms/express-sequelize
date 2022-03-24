module.exports = function (app) {

const Transactions = require("./Transactions");

app.get("/trx", async () => {
    const trans = await Transactions.findAll();
    res.send(trans);
  });

};