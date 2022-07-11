// Importar express
const express = require('express')

// Crear una instancia de express
const app = express()

// Puerto de conexion del servidor local
const server = '5000'

// Peticion get a la direccion /
app.get('/', (req,res) => {
    res.send(req.rawHeaders)
})

app.listen(server, () => {
    console.log(`Server running on port ${server}`)
})