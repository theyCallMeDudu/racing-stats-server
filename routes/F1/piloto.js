const { Router } = require("express");
const { getPilotos, getPilotosPorAno, getPilotoPorId } = require('../../controllers/F1/piloto');
const router = Router()

router.get("/pilotos", getPilotos)
router.get("/pilotos/:ano", getPilotosPorAno)
router.get("/piloto/:id", getPilotoPorId)

module.exports = router