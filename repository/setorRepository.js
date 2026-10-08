const setores = []

export function cadastrarS(setor){
    setores.push(setor)
}

export function listarS(){
    return setores;
}

export function buscarIndice(indice){
     return setores[indice]
}


export function atualizarS(indice, dadosAtualizados){
    return setores[indice]
}

export function excluir(indice){
    setores.splice(indice, 1)
}