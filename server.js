const express = require('express');
const mongoose = require('mongoose');
const Article = require('./models/article')
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override')
const app = express();

app.set('view engine', 'ejs');

mongoose
  .connect('mongodb://127.0.0.1/blog-markdown', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.use(express.urlencoded({ extended: false })) 
app.use(methodOverride('_method'))

app.get('/', async(req, res) => {
    const articles = await Article.find().sort({
    createdAt: 'desc'})
    res.render('articles/index', {articles: articles})
  });  

app.use('/articles', articleRouter)

app.listen(5000)