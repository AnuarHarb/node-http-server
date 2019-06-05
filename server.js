const http = require('http');
const fs = require('fs');
const port = 8000;


const server = http.createServer(manejadorDeRespuesta);

function manejadorDeRespuesta(req, res){
  fs.access('static/index.html', fs.constants.F_OK, function(err) {
    if(err) {
      res.write('El archivo no existe');
      res.end();
    } else {
      res.write('El archivo si exite');
      res.end();
    }
  })
}

server.listen(port, function(){
  console.log('Iniciando servidor en puerto ' + port);
});
