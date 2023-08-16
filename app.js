const express = require('express')
const routerPilotos = require('./routes/F1/piloto')
const app = express()
const port = 8000

app.use('/f1', routerPilotos)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})