import { Amostra } from "../model/Amostra.js";
import { cadastrar, listar } from "../repository/amostraRepository.js"


export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra)

    res.status(201).json(amostra);
}

export function listarTodos(req, res){
    const amostra = listar();

    res.status(200).json(amostra)
}


export function atualizarAmostra(req, res){
    const indice = Number(req.params.indice);

     = buscarPorId(indice);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }

    const {descricao, preco, peso} = req.body;

    if(descricao !== undefined){
        produto.descricao = descricao
    }

    if(preco !== undefined){
        produto.preco = preco
    }

    if(peso !== undefined){
        produto.peso = peso;
    }

    atualizar(indice, produto);

    res.status(200).json(produto);
}