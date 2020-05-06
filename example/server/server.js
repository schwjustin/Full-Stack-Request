const cors = require("cors")
const express = require("express") //import express module
const app = express() //call constructor of application
const http = require("http")

app.use(cors())
let server = http.createServer(app) //create http server using express application
let port = 3001
let hostname = "localhost"

app.get('/', (req, res) => {   res.send('Hello World!') });
server.listen(port, hostname, () => { console.log(`Server running at http://${hostname}:${port}/`); }); //arrow function
