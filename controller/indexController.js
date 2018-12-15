module.exports = function(app){
  const bodyParser = require('body-parser');

  app.get('/' , function(req,res){
    res.render('home');
  });
}
