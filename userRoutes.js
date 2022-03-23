module.exports = function (app) {
  const User = require("./Users");
  const auth = {};

  app.post("/users", async (req, res) => {
    req.body.isActive = true;
    req.body.isLocked = false;
    await User.create(req.body);
    res.send("success");
  });

  app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
  });

  app.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    res.send(user);
  });

  app.get("/users/:UserName/:Password", async (req, res) => {
    const username = req.params.UserName;
    const pass = req.params.Password;
    const user = await User.findOne({
      where: { UserName: username, Password: pass },
    });
    res.send(user);
  });

  app.put("/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    user.UserName = req.body.UserName;
    user.LastName = req.body.LastName;
    user.Password = req.body.Password;
    user.Phone = req.body.Phone;
    user.Address = req.body.Address;
    user.City = req.body.City;
    user.State = req.body.State;
    user.isActive = req.body.isActive;
    user.isLocked = req.body.isLocked;
    await user.save();
    res.status(200).send("Updated");
  });

  app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;
    await User.destroy({ where: { id: id } });
    res.status(200).send("removed");
  });

  app.get("/auth/:UserName/:Password", async (req, res) => {
    const username = req.params.UserName;
    const pass = req.params.Password;
    const user = await User.findOne({
      where: { UserName: username, Password: pass },
    });
    if (user) {
      auth.authSuccess = true;
      auth.messages = "None";
      auth.UserDetail = {UserName : user.UserName , FirstName:user.FirstName, LastName:user.LastName,isActive: user.isActive,isLocked: user.isLocked};
    }
    else{
      auth.authSuccess = false;
      auth.messages = "User not Found";
      auth.UserDetail = null;
    }
    res.send(auth);
  });
};
