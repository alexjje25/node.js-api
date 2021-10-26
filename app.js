const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser'); 

const rotaprodutos = require('./routes/produtos');
const rotapedidos = require('./routes/pedidos');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({  extended:false})); //apenas dados simples
app.use(bodyParser.json());//json de entrada no body

app.use((req, res, next) =>{
    res.header('Access-control-allow-Origin', '*');//informa que uma espcifica "*" empresa que pode utilizar a API

    res.header('Acess-Control-allow-Header',
    'Origin', 'X-Requested-with, Content-Type, Accept, Authorization'
    );


if(req.method === 'OPTIONS'){
    res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).send({});
}
next();

});

app.use('/produtos', rotaprodutos);
app.use('/pedidos', rotapedidos);




//erros
//nao localizando nenhuma rota ele entrara no erro abaixo
app.use((req, res, next) => {
    const erro = new Error('Nao encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
}); 

module.exports = app;