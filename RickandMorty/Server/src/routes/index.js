const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hola desde router")
})

const login = require("../controllers/login");
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")
const deleteFav = require("../controllers/deleteFav")
const getCharById = require("../controllers/getCharById");
const getAllCharacters = require("../controllers/getAllCharacters")

router.get("/allcharacters", getAllCharacters)

router.get("/character/:id", getCharById);

router.post("/login", postUser)

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;