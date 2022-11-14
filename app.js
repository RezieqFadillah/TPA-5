const express = require("express")
const db = require("./config/koneksi")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const allRoutes = require("./routes")

app.use(express.json())
app.use(allRoutes)

const PORT = process.env.URL

db.
    then(() => {
        console.log("terhubung ke database")
    })
    .catch(() => {
        console.log(err)
    })

app.listen(PORT, () => {
    console.log("Server berjalan di PORT " + PORT)
})