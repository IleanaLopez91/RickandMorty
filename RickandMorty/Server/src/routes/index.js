const express = require("express");
const router = express.Router()

router.get("/", (req, res) => {
    res.send("hola desde router")
})

const {postFav, deleteFav} = require("../controllers/handleFavorites");
const login = require ("../controllers/login");
const getCharById = require("../controllers/getCharById");
const getAllCharacters = require("../controllers/getAllCharacters")

router.get("/allcharacters", getAllCharacters)

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;