const mongoose = require("mongoose")
const { Schema } = mongoose

const seriesSchema = new Schema({
    _id: String,
    jenis: String,
    transmisi: String,
    bensin: String
})

const series = mongoose.model("series", seriesSchema)

module.exports = series