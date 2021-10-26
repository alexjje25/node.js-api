const express = require ('express');
const router = express.Router();

//retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'RETORNAR TODOS OS PRODUTOS meno'
    });
});

//inseri um produto
router.post('/', (req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    };
    res.status(201).send({
        mensagem: 'insere um produto',
        produtoAdicionado: produto
        
    })
});


//retorna os dados de um produto
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto 
    
    if(id === 'especial'){
       res.status(200).send({
           mensagem: 'VOCE DESCOBRIU O ID ESPECIAL',
           id : i

       });
       
    } else{
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }

    
 
})

router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'produto atualizado com sucesso'
    })
})

router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'produto excluido com sucesso'
    })
})


module.exports = router;