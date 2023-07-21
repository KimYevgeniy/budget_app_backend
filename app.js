const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { connectDB } = require('./db/connectDB')
const { readdirSync } = require('fs')


require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

connectDB()
app.listen(PORT, () => console.log("Server running on port " + PORT))