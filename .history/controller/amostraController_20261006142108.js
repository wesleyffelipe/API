import { Amostra } from "../model/Amostra.js";
import { cadastrar } from "../repository/produtoRepository.js"


export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body

    const amostra = new Amostra(codigo, material, origem, resultado);

    res.status(201).json(amostra);
}

