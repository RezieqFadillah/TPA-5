const mongoose = require("mongoose")
const { Schema } = mongoose

const motorSchema = new Schema({
    _id: String,
    nama: String,
    ukuran_cc: Number,
    jumlah_silinder: Number,
    shock: String,
    warna: String,
    harga: String,
    series: {
        jenis: String,
        transmisi: String,
        bensin: String
    }
})

const motor = mongoose.model("motor", motorSchema)

module.exports = motor