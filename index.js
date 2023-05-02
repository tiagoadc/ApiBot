var http = require('http')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', require('./router')) 


http.createServer(app).listen(4000, 'localhost', ()=>{
    console.log('ouvindo server 4000')
})