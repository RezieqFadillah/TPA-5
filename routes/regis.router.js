const express = require("express")
const router = express.Router()

const {
    getAllUser,
    addUser
} = require("../controllers/user.controller")

router.get("/", getAllUser)
router.post("/", addUser)

module.exports = router