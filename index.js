const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', require('./routes/rutas'));

app.use((req, res, next) => {
  res.status(404).render(`404`,{
    direccionErronea:"Dirección erronea pagina no encontrada"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
