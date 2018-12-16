module.exports = function(app){
  const bodyParser = require('body-parser');
  app.get('/' , function(req,res){
    res.render('home', {activeLink : 0});
  });
  app.get('/album', function(req,res){
    res.render('album', {activeLink : 1});
  })
  app.get('/songs', function(req,res){
    res.render('songs', {activeLink : 2});
  });
  app.get('/albumDetails/:album', function(req,res){
    res.render('albumDetails' , {album : req.params.album,activeLink : 1});
  });
}
