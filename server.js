const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
require('./config/db.connection')
const peopleController = require('./controllers/people_controller')
require('dotenv').config
const { PORT } = process.env

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/people', peopleController)

app.get('/', (req,res)=>{
    res.redirect('/people')
})

app.listen(PORT, ()=>console.log(`Listening to port: ${PORT}`))