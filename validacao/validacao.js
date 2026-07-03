function validaNome(Nome) {
    Nome = Nome.trim()

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-.'/()]{2,100}$/;
    return regex.test(Nome)
}

function validaCategoria(Categoria) {
    Categoria = Categoria.trim();

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']{2,50}$/;
    return regex.test(Categoria)
}

function validaQuantidade(Quantidade) {
    Quantidade = Number(Quantidade);

    return Number.isInteger(Quantidade) && Quantidade >= 0;
}

function validaValidade(Validade) {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(Validade)
}


export function validaProdutos(Nome, Categoria, Quantidade, Validade){
    const nome = validaNome(Nome);
    const categoria = validaCategoria(Categoria);
    const quantidade = validaQuantidade(Quantidade);
    const validade =  validaValidade(Validade);

    if(!nome) {
        return {
            status: false,
            mensagem: "Nome inválido"
        }
    }

    if(!categoria){
        return {
            status: false,
            mensagem: "Categoria inválida"
        }
    }

    if(!quantidade){
        return {
            status: false,
            mensagem: "Quantidade inválida"
        }
    }

    if(!validade){
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
