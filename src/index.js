require('dotenv').config() 
const express = require('express')
const app = express()
const morgan = require('morgan')

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Petitions
// app.use('/', require('./Controllers/home')).use('/api', require('./Controllers/api')).use('/api/movies', require('./Controllers/c_movies'))
app.use(require('./routes/route'))
app.listen(process.env.PORT_HOST, () => console.log(`Listen on port ${process.env.PORT_HOST}`))