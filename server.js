const http = require('http');
const fs = require('fs');
const port = 8000;

const historia = 'Había una vez, un pato que se llamaba resistol, se cayó de un árbol y se pegó';


const server = http.createServer(manejadorDeRespuesta);

function manejadorDeRespuesta(req, res){
  fs.readFile('static/index.html', 'utf-8', function(err, contenido) {
    if(err) {
      throw err;
    }

    res.writeHeader(200, {"Content-Type": "text/html"});
    res.write(contenido);
    res.end();
  })
}

server.listen(port, function(){
  console.log('Iniciando servidor en puerto ' + port);
});
