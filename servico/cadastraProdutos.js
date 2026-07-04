import pool from './conexao.js';


export async function CadastraProdutos(Nome, Categoria, Quantidade, Validade){
    
    const conexao = await pool.getConnection();

    const query = await conexao.query("INSERT INTO produtos(Nome, Categoria, Quantidade, Validade) VALUES (?, ?, ?, ?)", [Nome, Categoria, Quantidade, Validade]);
    console.log(query);
    conexao.release();
}

export async function ProdutoExiste(Nome){
    const conexao = await pool.getConnection();

    const [rows] = await conexao.query('SELECT id FROM produtos WHERE Nome = ?', [Nome]);
    conexao.release();

    return rows.length > 0;
}