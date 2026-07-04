import express from 'express';
import cors from 'cors';
import { CadastraProdutos, ProdutoExiste } from './servico/cadastraProdutos.js';
import { validaProdutos } from './validacao/validacao.js'
import { RetornaProdutos, RetornaProdutosId } from './servico/retornaProdutos.js';


const app = express();
app.use(cors());
app.use(express.json());


app.get('/produtos', async (req, res) => {
    const categoria = req.query.categoria
    const produtos = await RetornaProdutos(categoria);
    
    if(produtos.length === 0) {
        return res.status(404).json({mensagem: "Nenhum produto encontrado nessa categoria."})
    }
    
    res.status(200).json(produtos);




})

app.get('/produtos/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const usuariosId = await RetornaProdutosId(id);

    if (usuariosId.length > 0) {
        res.status(200).json(usuariosId)
    }
    else {
        res.status(404).send({ mensagem: "Produto não encontrado" })
    }

})


app.post('/produtos', async (req, res) => {
    const nome = req.body.nome;
    const categoria = req.body.categoria;
    const quantidade = req.body.quantidade;
    const validade = req.body.validade;

    const campoValido = validaProdutos(nome, categoria, quantidade, validade)
    const produtoExiste = await ProdutoExiste(nome)

    if(produtoExiste) {
        return res.status(409).json({mensagem: "Já existe um produto com esse nome."})
    }

    if (campoValido.status) {
        await CadastraProdutos(nome, categoria, quantidade, validade);
        res.status(201).send({ mensagem: "Produto cadastrado com sucesso !! " });
    }
    else {
        res.status(400).send({ mensagem: campoValido.mensagem })
    }

})






app.listen('3001', async () => {
    const data = new Date();
    console.log(`Servidor Iniciado em ${data}`);
})