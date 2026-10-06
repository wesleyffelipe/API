const amostras = []

export function cadastrar(amostra){
    amostras.push(amostra)
}

export function listar(){
    return amostras
}

export function buscar(indice, amostra){
    amostras[indice] = amostra
}

export function excluirAmostra(indice){
    amostras.splice(indice)
}

