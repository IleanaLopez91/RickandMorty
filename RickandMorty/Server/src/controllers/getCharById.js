/*const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then( ({data}) => {
        const {id, name, gender, species, origin, image, status} = data
        res.writeHead(200, {"Content-type" : "aplication/json"})
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
    })
    .catch(err => {
        res.writeHead(500, {"Content-type" : "text/plain"})
        res.end(err.message)
    })
}

module.exports = getCharById;*/
const axios = require("axios")

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    /*const { id } = req.params;
    axios.get(URL+id)
        .then(({data}) => {
            if(data){
                const {id, status, name, species, origin = origin.name, image, gender} = data
                const character = {id, status, name, species, origin, image, gender}
                res.status(200).json(character)
            }else{
                res.status(404).json({message: "Not fount"})
            }
        })
        .catch(err => {
            res.status(500).json({message : err})
        })*/
    try {
        const { id } = req.params;
        const { data } = await axios.get(URL+id);
        if(data){
            const {id, status, name, species, origin = origin.name, image, gender} = data
            const character = {id, status, name, species, origin, image, gender}
            res.status(200).json(character)
        }else{
            res.status(404).json({message: "Not fount"})
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

module.exports = getCharById;

