// creating an http server
// express
// node default lib => no.

const express = require ('express');
const bodyParser = require ("body-parser"); 

const app = express()
const port = 3000

// install nodemon, which lets you running the server without re typing the node cmd everytime you want to run the server.
// nodemon will save the change and restart the server automatically.
// > npx nodemon index.js

//middlewares
app.use(bodyParser.json());

// fetch
// 

app.get("/route-handler", function(req,res){
    // headers, body, qurery prams
    // do ml like model
    res.json({
        name: "Applexity",
        age:21
    })
})

// app.post("/conversation", function(req, res){
//   res.send('<h1>Hii From Aplexity<h1>')
// })

app.post("/conversation", function(req, res){
  // console.log(req.headers["authorization"])
  console.log(req.body); // Will give you undefined (google why)
  res.send({
    msg: "2 + 2 = 4"
  })
})

app.get('/', function(req, res){
  res.send('Hello World! from HTTP server')
})

app.listen(port, () => {
  console.log(`example port listening on port ${port}`);
})
