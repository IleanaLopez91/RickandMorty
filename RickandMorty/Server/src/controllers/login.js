const { User } = require("../DB_connection");

const login = async (req, res) => {
    
    try {
        const { email, password } = req.query;
        if(!email || !password ){
            return res.status(404).json({message: "Faltan datos"})
        }
        const response = await User.findOne({ where: { email }});  
        if(!response){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        if(response.password !== password){
            return res.status(403).json({message: "Contraseña incorrecta"})
        }else{
            return res.status(200).json({
                access: true
             })
        }
    } catch (error) {
       res.status(500).json({message: error.message}) 
    }
}

module.exports=login