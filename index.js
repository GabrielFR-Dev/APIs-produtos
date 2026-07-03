import express from 'express';
import pool from './servico/conexao.js';
import cors from 'cors';


const app = express();
app.use(cors());



app.listen('3001', async() => {
    
    const data = new Date();
    const conexao = await pool.getConnection();

    console.log(`Servidor Iniciado em ${data}`);
    console.log(conexao.threadId);
    conexao.release();
})