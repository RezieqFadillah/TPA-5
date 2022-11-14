const express = require("express")
const router = express.Router()

const regisRouter = require("./regis.router")
const loginRouter = require("./login.router")
const userRouter = require("./motor.router")
const seriesRouter = require("./series.router")
const verifytoken = require("../middleware/verifytoken")

router.use("/regis", regisRouter)
router.use("/login", loginRouter)
router.use("/motor", verifytoken, userRouter)
router.use("/series", verifytoken, seriesRouter)

module.exports = router