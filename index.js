import express from 'express';
import cors from 'cors';
import { CadastraProdutos } from './servico/cadastraProdutos.js';
import { validaProdutos } from './validacao/validacao.js'


const app = express();
app.use(cors());
app.use(express.json());



app.post('/cadastrar', async(req, res) => {
    const nome = req.body.nome;
    const categoria = req.body.categoria;
    const quantidade = req.body.quantidade;
    const validade = req.body.validade;

   const campoValido = validaProdutos(nome, categoria, quantidade, validade)

     if (campoValido.status) {
        await CadastraProdutos(nome, categoria, quantidade, validade);
        res.status(201).send({ mensagem: "Usuário cadastrado com sucesso" });
    }
    else {
        res.status(400).send({ mensagem: usuarioValido.mensagem })
    }

})






app.listen('3001', async() => {
    const data = new Date();
    console.log(`Servidor Iniciado em ${data}`);
})