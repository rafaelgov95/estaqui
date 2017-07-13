'use strict'
require('./db/config')
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongoose');
var estacionamento = require('./routes/crud-estacionamento/api')('schema-estacionamento', 'estacionamentos')
var funcionario = require('./routes/crud-funcionario/api')('schema-funcionario', 'funcionarios')
var usuario = require('./routes/crud-usuario/api')('schema-usuario', 'usuarios')
var gerencia = require('./routes/crud-gerente/api')('schema-gerente', 'gerentes')
var login = require('./routes/login')
var router = express.Router();

var app = express();

// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')


// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use('/',express.static(path.join(__dirname, path.join('views', 'dist'))));
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.use('/api/*', (req, res) => {

    app.post('/api/autentica', login) // autentica
    app.use('/api/usuario', usuario)
    app.use(require('./routes/verifica-toke')) // verifica o token 
    app.use('/api/funcioario', funcionario)
    app.use('/api/estacionamento', estacionamento);
    app.use('/api/gerente', gerencia);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});



// app.use(function (req, res, next) {
// app.get('/*', function (req, res) {
//     res.render(path.join(__dirname + '/views/dist/index.html'));
//__dirn    ame : It will resolve to your project folder.
// next()
// next()
// });

// app.use('/api/*',(req, res)=>{
//     console.log('entro aqui ufa')
//     app.post('autentica', login) // autentica
//     app.use('/api/usuario', usuario)
//     app.use(require('./routes/verifica-toke')) // verifica o token 
//     app.use('/api/funcioario', funcionario)
//     app.use('/api/estacionamento', estacionamento);
//     app.use('/api/gerente', gerencia);
// });

// app.get('/*', function (req, res) {
//     res.render(path.join(__dirname + '/views/dist/index.html'));
//     //__dirname : It will resolve to your project folder.
// });


// next()
// })

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;