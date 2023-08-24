const express = require('express')
const cors = require('cors')
const routerPilotos = require('./routes/F1/piloto')
const app = express()
const port = 8000

app.use(cors())
app.use('/f1', routerPilotos)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})