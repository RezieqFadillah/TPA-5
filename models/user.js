const mongoose = require("mongoose")
const { Schema } = mongoose

const motorSchema = new Schema({
    nama: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("user", motorSchema)

module.exports = user