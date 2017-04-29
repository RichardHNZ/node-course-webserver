const express = require('express');
const hbs = require('hbs');

var app = express();
hbs.registerPartials(__dirname+ '/views/partials')
app.set('view engine', 'hbs');

app.use(express.static(__dirname+ '/public'))
app.get('/',(req, res) => {
  res.render('mainPage.hbs', {
    pageName : 'Main Page',
    year : new Date().getFullYear(),
    welcomeMessage : 'Welcome, Richard'
  });
});

app.get('/About',(req, res) => {
  res.send('About Page');
});

app.get('/Bad',(req, res) => {
  res.send({
    errorMessage : 'Bad request'
  })
})

app.listen(3000, () =>{
  console.log('website working')
});
