const express = require("express")
const userMid = require("./middlewares/userMiddleware.js")
const userControl = require("./controllers/userControll.js")
const router = express.Router()

router.post("/userRegist", userMid, userControl)
router.get("/", (req, res) => { return res.json({ "msg": "http://localhost:3000" }) })

module.exports = router