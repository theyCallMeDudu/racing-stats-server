const { getAllDrivers, getDriversByYear } = require("../../services/F1/piloto")

async function getPilotos(req, res) {
    try {
        const pilotos = await getAllDrivers()
        res.send(pilotos)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getPilotosPorAno(req, res) {
    try {
        const ano = req.params.ano
        
        if (ano && Number(ano)) {
            const pilotos = await getDriversByYear(ano)
            res.send(pilotos)
            // res.json(pilotos)
        } else {
            res.status(422).send("Ano inválido!")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getPilotos,
    getPilotosPorAno
}