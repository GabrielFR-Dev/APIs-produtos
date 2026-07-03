import express from 'express';
import cors from 'cors';
import { CadastraProdutos } from './servico/cadastraProdutos.js';


const app = express();
app.use(cors());






app.listen('3001', async() => {
    const data = new Date();
    console.log(`Servidor Iniciado em ${data}`);
})