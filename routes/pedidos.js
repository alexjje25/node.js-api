const express = require ('express');
const router = express.Router();


//retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'usando o get dentro da rota de pedidos'
    });
});



//inseri um produto
router.post('/', (req, res, next) => {
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'o pedido foi feito lekaoo',
        pedidoCriado: pedido
    })
});


//retorna os dados de um pedidos
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_produto 
    
    if(id === 'especial'){
       res.status(200).send({
           mensagem: 'detalhes do pedido',
           id : id

       });
       
    } else{
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }
})


//exclui um produto
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'pedido excluido'
    })
})

module.exports = router;