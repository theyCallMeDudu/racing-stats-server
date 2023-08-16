const { Router } = require("express");
const { getPilotos, getPilotosPorAno } = require('../../controllers/F1/piloto');
const router = Router()

router.get("/pilotos", getPilotos)
router.get("/pilotos/:ano", getPilotosPorAno)

module.exports = router