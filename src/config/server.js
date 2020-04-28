const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set('port',process.env.PORT || 3000);//establecer el 3000 o el que te de el SO
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app/views'));//diciendole donde esta la carpeta de las vistas
//MIDDLEWARES
app.use(bodyParser.urlencoded({extended: false}));
module.exports= app;