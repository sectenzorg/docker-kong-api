const express = require('express')
const server = express()
const port = 3000
 
server.get('/hiji', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v1 (HIJI)') 
})

server.get('/dua', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v2 (DUA)')
})

server.get('/tilu', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v3 (TILU)')
})

server.get('/opat', (req, res) => {
    console.log(req.headers)
    res.status(200).send('API v4 (OPAT)')
})

server.get('/lima', (req, res) => {
    console.log(req.headers)
    res.status(200).send('API v5 (LIMA)')
})

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})