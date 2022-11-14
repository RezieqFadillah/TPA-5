const mtr = require("../models/motor")

module.exports = {
    getAllMotor: async (req, res) => {
        try {
            const motors = await mtr.find()
            res.json({
                data: motors
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getMotorByID: async (req, res) => {
        try {
            const id = req.params.id
            const motors = await mtr.findById(id)
            if(motors){
                res.json({
                    data: motors
                })
            } else {
                res.json({
                    message: "data tidak ada ni"
                })
            }
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    addMotor: (req, res) => {
        try {
            const data = req.body
            const motor = new mtr(data)
            motor.save()

            res.json({
                message: "data telah diinput"
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }       
    },

    deleteMotorByID: async (req, res) => {
        const id  = req.params.id
        try {
            const hapus = await mtr.findByIdAndDelete(id)
            if(!hapus) return res.status(404).json({message: "Data tidak ada"})
            return res.json({message: "Data berhasil dihapus"})
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    updateMotorByID: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body

            const perbarui =  await mtr.findByIdAndUpdate(id, data, { new: true})
            if(!perbarui) return res.status(404).json({message: "Data tidak ada"})
            return res.json({
                message: "Data berhasil di update",
                data: perbarui
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        } 
    }
}