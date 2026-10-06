const amostras = []

export function cadastrarAmostra(amostra){
    amostras.push(amostra)
}

export function listarAmostra(){
    return amostras
}

export function buscarAmostra(indice, amostra){
    amostras[indice] = amostra
}

export function excluirAmostra(indice){
    a
}