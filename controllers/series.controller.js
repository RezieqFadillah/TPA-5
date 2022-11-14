const seri = require("../models/series")

module.exports = {
    getAllSeries: async (req, res) => {
        try {
            const series = await seri.find()
            res.json({
                data: series
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    getSeriesByID: async (req, res) => {
        try {
            const id = req.params.id
            const serieses = await seri.findById(id)
            if(serieses){
                res.json({
                    data: serieses
                })
            } else {
                res.json({
                    message: "data tidak ada"
                })
            }
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    addSeries: (req, res) => {
        try {
            const data = req.body
            const series = new seri(data)
            series.save()

            res.json({
                message: "data telah diinput"
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    deleteSeriesByID: async (req, res) => {
        try {
            const id  = req.params.id

            const hapus = await seri.findByIdAndDelete(id)
            if(!hapus) return res.status(404).json({message: "Data tidak ada"})
                        
            return res.json({message: "Data berhasil dihapus"})
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }
    },

    updateSeriesByID: async (req, res) => {
        try {
            const id = req.params.id
            const data = req.body

            const perbarui =  await seri.findByIdAndUpdate(id, data, { new: true})
            if(!perbarui) return res.status(404).send("Data tidak ada")
            return res.json({
                message: "Data berhasil di update",
                data: perbarui
            })
        } catch (error) {
            return res.status(400).send("Aduh eror")
        }  
    }
}