import pool from './conexao.js';


export async function RetornaProdutos(categoria) {
    const conexao = await pool.getConnection();

    let produtos;

    if (categoria) {
        produtos = await conexao.query('SELECT Nome, Categoria, Quantidade, Validade FROM produtos WHERE categoria = ?', [categoria]);
    }
    else {
        produtos = await conexao.query('SELECT * FROM produtos');
    }



    conexao.release();
    return produtos;
}


export async function RetornaProdutosId(id) {
    const conexao = await pool.getConnection();

    const query = await conexao.query('SELECT Nome, Categoria, Quantidade, Validade FROM produtos WHERE Id = ?', [id]);

    conexao.release()
    return query[0]
}