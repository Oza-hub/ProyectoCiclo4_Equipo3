import express from "express";
import routes from './routes/routes.js';
const PORT = 4000;

const app = express();
app.use(express.json());

//Middleware
/*Se envia una petición para obtener una respuesta*/
app.use('/api', routes);


const saludo = (req, res) => {
  res.json({
          mensaje:"Hola Mundo Express"
  });
}

app.listen(PORT,()=> {
  console.log(`Servidor inicializado en el puerto ${PORT} `);

});

