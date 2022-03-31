const express = require("express");

const sequelize = require('./database');

sequelize.sync({ force: true }).then(() => console.log('db is ready'));

const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

/** Users Routings */
require('./modules/Users/userRoutes')(app);

/**Transactions Routings */
require('./modules/Transactions/TransactionRoutes')(app);

/**Sidebar Routings */
require('./modules/Sidebar/sidebarRoutes')(app);

app.listen (5000, () => {
  console.log("app is running");
});
