const usr = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const user = await usr.find()
            res.json({
                data: user
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
    addUser: (req, res) => {
        try {
            const data = req.body
        
            const saltRounds = 10
            const hash = bcrypt.hashSync(data.password, saltRounds)
            data.password = hash
        
            const user = new usr(data)
            user.save()

            res.json({
                message: "Berhasil register"
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },
    login: async (req,res) => {
        try {
            const data = req.body

            const user = await usr.findOne({ nama: data.nama})
            
            if(!user)res.status(400).send("Akun tidak ditemukan")

            const checkPs = bcrypt.compareSync(data.password, user.password)
            console.log(checkPs)

            if (checkPs) {
                const token = jwt.sign({username: user.nama},
                    process.env.TOKEN_KEY, {expiresIn: "1h"})


                res.header("auth-token", token)
                res.json({
                    message: "anda berhasil login"
                })
            } else {
                res.status(400).send("Nama dan password tidak sama")
            }
        } catch (error) {
        }
    }
}