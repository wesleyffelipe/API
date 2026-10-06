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

export function atualizarProduto