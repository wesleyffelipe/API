const amostras = []

export function cadastrar(amostra){
    amostras.push(amostra)
}

export function listar(){
    return amostras;
}

export function buscarPorId(indice, amostra){
    amostras[indice] = amostra
}

export function excluir(indice){
    amostras.splice(indice, 1)
}

export function atualizar(indice, amostra)
