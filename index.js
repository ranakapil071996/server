const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000

//we can white list server here current this is available for all
app.use(cors())

app.use(body_parser.urlencoded({ extended: false}));
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("db is up")
})

mongoose.connection.on('connected', () => console.log("connected"))

mongoose.connection.on('error',(err)=> console.log(err))

app.use('/templates', require('./api/template'))
app.use('/users', require('./api/user'))

app.listen(port, () => {
    console.log("server up on "+ port)
})