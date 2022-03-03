const express = require("express");
const sequelize = require('./database');

sequelize.sync({ force: false }).then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

/** Users Routings */
require('./userRoutes')(app);

app.listen(5000, () => {
  console.log("app is running");
});
