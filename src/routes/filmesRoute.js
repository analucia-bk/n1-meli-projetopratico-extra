const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/filmesControllers")
router.get("/",controller.get)

module.exports = router