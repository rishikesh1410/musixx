const express = require('express');
const indexController = require('./controller/indexController');

const app = express();

app.set('view engine' , 'ejs');

app.use(express.static('./public'));

indexController(app);

app.listen(8080);
