const express = require("express")
const router = express.Router()

const {
    getAllMotor,
    getMotorByID,
    addMotor,
    deleteMotorByID,
    updateMotorByID,
} = require("../controllers/motor.controller")

router.get("/", getAllMotor)
router.get("/:id", getMotorByID)
router.post("/", addMotor)
router.delete("/:id", deleteMotorByID)
router.put("/:id", updateMotorByID)

module.exports = router