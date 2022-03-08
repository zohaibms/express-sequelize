module.exports = function(app){

  const User = require('./Users');
  const auth = {};

    app.post('/users', async (req, res) => {
        await User.create(req.body);
        res.send("success");
      })
      
      app.get('/users', async (req, res) => {
        const users = await User.findAll();
        res.send(users);
      })
      
      app.get('/users/:id', async (req, res) => {
        const id = req.params.id;
        const user = await User.findOne({where: {id: id}});
        res.send(user);
      })
      
      app.get('/users/:UserName/:Password',async (req, res)=> {
        const username = req.params.UserName;
        const pass = req.params.Password;
        const user = await User.findOne({where: {UserName: username , Password: pass}});
        res.send(user);
      })
      
      app.put('/users/:id', async (req, res) => {
        const id = req.params.id;
        const user = await User.findOne({where: {id: id}});
        user.username = req.body.username;
        await user.save();
        res.send('updated');
      })
      
      app.delete('/users/:id', async (req, res) => {
        const id = req.params.id;
        await User.destroy({where: {id: id}});
        res.send('removed');
      })


      app.get('/auth/:UserName/:Password',async (req, res) => {
        const username = req.params.UserName;
        const pass = req.params.Password;
        const user = await User.findOne({where: {UserName: username , Password: pass}});
        if (user) {
          auth.authSuccess = true;
          auth.messages = "None";
          auth.UserDetail = user;
        }
        res.send(auth);
      })

    
}