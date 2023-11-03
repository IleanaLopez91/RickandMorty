const { get } = require("../routes")
const URL = "https://rickandmortyapi.com/api/character/"

const getAllCharacters = async (req, res) => {
    const { page } = req.query;
    const { data } = await axios.get(URL)
}

module.exports = getAllCharacters