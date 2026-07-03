import pool from './servico/conexao.js';


export async function CadastraProdutos(Nome, Categoria, Quantidade, Validade){
    
    const conexao = await pool.getConnection();

    const query = await conexao.query("INSERT INTO produtos(Nome, Categoria, Quantidade, Validade) VALUES (?, ?, ?, ?)", [Nome, Categoria, Quantidade, Validade]);
    console.log(query);
    conexao.release();
}