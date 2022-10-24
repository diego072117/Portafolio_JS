const express = require('express')
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index',
  {
    name: "Diego Parra_",
    work: "developer junior",
    hello: 
    'Soy un desarrollador junior capaz de construir sistemas de información desde el principio - desde le concepto de la, funcionalidad, navegabilidad y el diseño. Soy capaz de escribir código bien diseñado , comprobable y eficiente. Aprendizaje rápido, trabajador y jugador de equipo que es competente en una serie de lenguajes de programación y herramientas web multimedia.',
    descripcion:'esta es la pagina de los productos',

  });
})

router.get('/futuro', (req, res) => {
    res.render(`futuro`,{
      title:"MY FUTURE",
      date:"Enero, 01, 2030",
      description:"Mi nombre es Diego Alexander Parra Calderón aspiro a muchas cosas, quiero llegar a vivir de la programación me gusta tanto el backend como el fronend consideró que me desempeño bien en las dos áreas, en estos momentos quiero terminar el tecnólogo para el otro año entrar a la universidad y homologar la carrera, una vez termine la universidad me gustaría ir a trabajar a otro país o de ser posible me gustaría estudiar y trabajar en otro país.",
      descriptionTwo:"Quiero especializarme en las dos áreas tanto en backend y en fronend, me gustaría estudiar en países como Canadá o suiza, en un futuro me gustaría ir a vivir a otro país y me gustaría desempeñarme en empresas como Google, Facebook o Apple.",
      descriptionThree:"Luego de ya tener mis estudios completos me gustaría invertir en empresas o montar una, también me gustaría ser socio de una de las grandes empresas."
    })
})

router.get('/work', (req, res) => {
    res.render(`work`)
})





module.exports = router;