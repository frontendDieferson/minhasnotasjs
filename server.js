const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//setando a pasta e a engine que vai renderizar as views
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes);



app.listen(3000);