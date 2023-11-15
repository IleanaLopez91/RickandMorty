const axios = require('axios');

const getAllCharacters = async (req, res) => {
    try {
        const { page } = req.query;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener los personajes' });
    }
}


module.exports = getAllCharacters