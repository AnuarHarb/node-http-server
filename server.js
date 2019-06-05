const http = require('http');
const port = 8000;

const server = http.createServer(manejadorDeRespuesta);

function manejadorDeRespuesta(req, res){
  res.write('Hola desde el servidor!');
  res.end();
}

server.listen(port, function(){
  console.log('Iniciando servidor en puerto ' + port);
});
