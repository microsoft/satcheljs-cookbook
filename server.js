const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const opn = require('opn');

const app = express();

const compiler = webpack(config);

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

app.get('/', function(req, res) {
    res.render('index', { recipe: 'home' });
});

app.get('/:recipe', function(req, res) {
    res.render('index', { recipe: req.params.recipe });
});

app.listen(3003, function() {
    console.log('SatchelJS Cookbook listening on port 3003!');
    opn('http://localhost:3003');
});
