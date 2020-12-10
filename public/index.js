const express = require("express")
const fs = require("fs")
const app = new express()
const port = 8000

const html = fs.readFileSync("./index.html", "utf8")
const css = fs.readFileSync("./style.css", "utf8")

app.get("/", (req, res) => {
  res.send(html)
})

app.get("/style.css", (req, res) => {
  res.send(css)
})

app.listen(port, () => console.log("App listening on port ", port))