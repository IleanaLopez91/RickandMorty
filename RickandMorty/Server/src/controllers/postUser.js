const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        if(!email || !password ){
            return res.status(400).json({message: "Faltan datos"})
        }
        const [user, isCreated] = await User.findOrCreate({ where:{email, password}, defaults:{}})
        res.status(201).send({user, isCreated})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = postUser