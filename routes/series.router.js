const express = require("express")
const router = express.Router()

const {
    getAllSeries,
    getSeriesByID,
    addSeries,
    deleteSeriesByID,
    updateSeriesByID,
} = require("../controllers/series.controller")

router.get("/", getAllSeries)
router.get("/:id", getSeriesByID)
router.post("/", addSeries)
router.delete("/:id", deleteSeriesByID)
router.put("/:id", updateSeriesByID)

module.exports = router