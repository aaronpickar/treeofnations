
import CountryController from './controllers/country_controller.js';
import ArticleController from './controllers/article_controller.js';
import express from 'express';
import expresshandlebars from 'express-handlebars';

const app = express();

app.engine('handlebars', expresshandlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

const country_controller = new CountryController();
const article_controller = new ArticleController();

app.get('/', function (req, res) {
  res.render('home', {title: 'Tree of Nations - Home'});
})

app.get('/home', function (req, res) {
  res.send('Hello World!')
})

//bind to controller when country URL is hit
app.get('/country/:country_htmlref', country_controller.showCountry.bind(country_controller));

app.get('/article/:article_htmlref', article_controller.showArticle.bind(article_controller));

app.get('/exploreourroots', function (req, res) {
  res.send('Hello World2!')
})

app.get('/contact', function (req, res) {
  res.send('Hello World3!')
})

app.get('/credits', function (req, res) {
  res.send('Hello World4!')
})

app.get('/travel-tips', function (req, res) {
  res.send('Hello World6!')
})

app.get('/findamemory', function (req, res) {
  res.send('Hello World!')
})

app.get('/travel-reflections', function (req, res) {
  res.send('Hello World!')
})

app.get('/travel-map', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})