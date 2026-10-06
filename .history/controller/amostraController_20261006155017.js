import { Amostra } from "../model/Amostra.js";
import { cadastrar, listar, buscar, deletar } from "../repository/amostraRepository.js"


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

    const amostra = buscarPorId(indice);

    if(!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }

    const {codigo, material, origem, resultado} = req.body;

    if(codigo !== undefined){
        amostra.codigo = codigo
    }

    if(material !== undefined){
        amostra.material = material
    }

    if(origem !== undefined){
        amostra.origem = origem
    }

    if(origem !== undefined){
        amostra.resultado = resultado
    }

    atualizar(indice, produto);

    res.status(200).json(produto);
}




export function listarTodos(req, res){
    const produtos = listar();

    res.status(200).json(produtos)
}

export function atualizarProduto(req, res){
    const indice = Number(req.params.indice);

    const amostra = buscarPorId(indice);

    if(!amostra) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }

    const {codigo, material, origem, resultado} = req.body;

    if(codigo !== undefined){
        amostra.codigo = codigo
    }

    if(material !== undefined){
        amostra.material = material
    }

    if(origem !== undefined){
        amostra.origem = peso;
    }

    atualizar(indice, produto);

    res.status(200).json(produto);
}

export function deletarProduto(req, res){
    const indice = Number(req.params.indice);

    const produto = buscarPorId(indice);
        
    if (!produto){
        return res.status(404).json({
            mensagem: "Produto nao encontrado"
        })
    }

    deletar(indice);

    res.status(200).json({
        mensagem: "Produto excluido com sucesso"
    });
}


export function buscarProdutoPorId(req, res){
    const indice = Number(req.params.indice);

    const produto = buscarPorId(indice);

    if(!produto){
        return res.status(404).json({
            mensagem: "Produto nao encontrado"
        });
    }

    res.status(200).json(produto)
}
