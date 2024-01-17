const express = require("express")
const router = require("./router.js")
const cors = require("cors")
const parser = require("body-parser")
const app = express()

app.use(parser.json())
app.use(cors())
app.use(router)
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

module.exports = app