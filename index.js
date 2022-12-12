import * as http from 'http'
import * as fs from 'fs'
import * as path from 'path'
import {dirname} from "dirname-filename-esm";
import data from "./data.js";

const server = http.createServer((request, response) => {
  // if (request.url === '/') {
  //   fs.readFile(path.join(dirname(import.meta), 'public', 'index.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //     response.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //
  //     response.end(data)
  //
  //   })
  //
  //
  // } else if (request.url === '/contact') {
  //   fs.readFile(path.join(dirname(import.meta), 'public', 'contact.html'), (err, data) => {
  //     if (err) {
  //       throw err
  //     }
  //     response.writeHead(200, {
  //       'Content-Type': 'text/html'
  //     })
  //
  //     response.end(data)
  //   })
  // }

  const localPathToFile = (directory, file) => path.join(dirname(import.meta), directory, file)


  let filePath = localPathToFile('public', request.url === '/' ? 'index.html' : request.url)
  const ext = path.extname(filePath)
  console.log(filePath)
  let contentType = 'text/html'

  switch (ext) {
    case '.css':
      contentType = 'text/css'
      break;
    case '.js':
      contentType = 'text/javascript'
      break;
    default: contentType = 'text/html'
  }

  function outputData(data) {
    response.writeHead(200, {
      'Content-Type': contentType
    })
    response.end(data)
  }

  function handleError() {
    fs.readFile(localPathToFile('public', 'error.html'), (err, data) => {
      if (err) {
        response.writeHead(500)
        response.end('ERROR')
      } else {
        outputData(data);
      }
    })
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      handleError();
    } else {
      outputData(data)
    }
  })
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Server has been started | PORT: ${PORT}`)
})
