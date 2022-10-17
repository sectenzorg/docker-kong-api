const express = require('express')
const server = express()
const port = 3000
 
server.get('/hiji', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v1') 
})

server.get('/dua', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API v2')
})

server.get('/tilu', (req, res) => {
  console.log(req.headers)
  res.status(200).send('API V3')
})

server.get('/opat', (req, res) => {
    console.log(req.headers)
    res.status(200).send('API V4')
})

server.get('/lima', (req, res) => {
    console.log(req.headers)
    res.status(200).send('API V5')
})

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`)
})