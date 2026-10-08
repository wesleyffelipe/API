import express from "express";
import{
    cadastrarSetor,
    listar,
    atualizarSetor,
    excluirSetor,
    buscarSetorPorId,
}from "../controller/setorController.js"

const router = express.Router();

router.post("/", cadastrarSetor)
router.get("/", listar)
router.patch("/:indice", atualizarSetor )
router.delete("/:indice", excluirSetor)
router.get("/:indice", buscarSetorPorId)


export default router;

