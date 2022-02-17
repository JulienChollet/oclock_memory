const http = require('http');
let fs = require('fs')
let url = require('url')


//creation du serveur
http.createServer((request, response) =>{
   //Mon serveur demarre sur ce fichier qui centralisera mes composants html
   fs.readFile('index.html','utf8',(err, data) => {
      if (err) {
         response.writeHead(404)
         response.end("ce fichier n'existe pas")
      }
      else {
         response.writeHead(200,{
            'Content-type' : 'text/html; charset=utf-8'
         })
         response.end(data)
      }

   })


   
}).listen(3000);




