const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;   
        const deleted = await Favorite.findByPk(id);
        await deleted.destroy()
        const response = await Favorite.findAll();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = deleteFav;