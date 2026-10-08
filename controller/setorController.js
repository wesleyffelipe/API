import { Setor } from "../model/Setor.js";
import { cadastrarS, listarS,  buscarIndice, atualizarS, excluir} from "../repository/setorRepository.js";

export function cadastrarSetor(req, res){
    const {nome, sigla, responsavel, ramal} = req.body

    const setor = new Setor(nome, sigla, responsavel, ramal);

    cadastrarS(setor)

    res.status(201).json(setor)
}

export function listar(req, res){
    const setor = listarS();
    
    res.status(200).json(setor)
}

export function atualizarSetor(req, res){
    const indice = Number(req.params.indice);

    const setor = buscarIndice(indice);

    if(!setor) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        })
    }
    
    const {nome, sigla, responsavel, ramal} = req.body;

    if(nome !== undefined){
        setor.nome = nome
    }
    if(sigla !== undefined){
        setor.sigla = sigla
    }
    if(responsavel !== undefined){
        setor.responsavel = responsavel
    }
    if(ramal !== undefined){
        setor.ramal = ramal
    }

    atualizarS(indice, setor);

    res.status(200).json(setor);
}

export function excluirSetor(req, res){
    const indice = Number(req.params.indice);

    console.log(indice);

    const setor = buscarIndice(indice);

    if(!setor){
        return res.status(404).json({
            mensagem: "Setor não encontrado"
        })
    }

    excluir(indice);

       res.status(200).json({
        mensagem: "Setor excluido com sucesso"
    });
}

export function buscarSetorPorId(req, res){
    const indice = Number(req.params.indice);

    const setor = buscarIndice(indice);

    if(!setor){
        return res.status(404).json({
            mensagem: "Setor nao encontrado"
        });
    }

    res.status(200).json(setor)
}