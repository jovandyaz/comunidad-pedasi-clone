const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const post = require ('./server/routes/post')
const user = require ('./server/routes/user')
const comment = require ('./server/routes/comment')
const category = require ('./server/routes/category')
const response = require ('./server/routes/response')
const votes = require ('./server/routes/votes')
const twilio = require('./server/routes/o')
const path = require('path')
const app = express()
const PORT = 4000

app.use(express.static(path.join(__dirname, 'build')))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pedasiDB',{useNewUrlParser:true},()=>console.log("mongood"))

app.use('/',post)
app.use('/',user)
app.use('/',comment)
app.use('/',category)
app.use('/',response)
app.use('/',votes)
app.use('/',twilio)


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || PORT,()=>console.log(`Running on port: ${PORT}`))