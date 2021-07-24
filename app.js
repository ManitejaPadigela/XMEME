const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const memesController = require('./controllers/memes')

const app = express();


app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended:false }));


app.use(express.static(path.join(__dirname,'public')));


app.get('/',memesController.getHomePage);

app.get('/top',memesController.getFormPage);


app.post('/top', memesController.postAddMeme);


 
app.get('/bottom',memesController.getMemes);


// app.get('/meme/:uname',memesController.getMeme);

app.listen(3000);