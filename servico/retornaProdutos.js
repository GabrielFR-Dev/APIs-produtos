import pool from './conexao.js';


export async function RetornaProdutos(){
    const conexao = await pool.getConnection();

    const query = await conexao.query('SELECT Nome, Categoria, Quantidade, Validade FROM produtos');
    const query_resultado = query[0];

    conexao.release();
    return query_resultado;
}


export async function RetornaProdutosId(id){
    const conexao = await pool.getConnection();

    const query = await conexao.query('SELECT Nome, Categoria, Quantidade, Validade FROM produtos WHERE Id = ?', [id]);
    
    conexao.release()
    return query[0]
}