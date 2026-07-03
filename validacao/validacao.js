function validaNome(nome) {
    nome = nome.trim()

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-.'/()]{2,100}$/;
    return regex.test(nome)
}

function validaCategoria(categoria) {
    categoria = categoria.trim();

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']{2,50}$/;
    return regex.test(categoria)
}

function validaQuantidade(quantidade) {
    quantidade = Number(quantidade);

    return Number.isInteger(quantidade) && quantidade >= 0;
}

function validaValidade(validade) {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(validade)
}


export function validaProdutos(nome, categoria, quantidade, validade){
    const nomeValido = validaNome(nome);
    const categoriaValida = validaCategoria(categoria);
    const quantidadeValida = validaQuantidade(quantidade);
    const validadeValida =  validaValidade(validade);

    if(!nomeValido) {
        return {
            status: false,
            mensagem: "Nome inválido"
        }
    }

    if(!categoriaValida){
        return {
            status: false,
            mensagem: "Categoria inválida"
        }
    }

    if(!quantidadeValida){
        return {
            status: false,
            mensagem: "Quantidade inválida"
        }
    }

    if(!validadeValida){
        return {
            status: false,
            mensagem: "Validade inválida"
        }
    }

    return {
        status: true,
        mensagem: ''
    }


}
