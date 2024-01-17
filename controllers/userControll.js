// vou operacoes relacionadas ao user 
const userModel = require("../models/userModel")

const userRegist = async (req, res) => {
    const result = await userModel.createNewUser(req.body)
    
    if (result.ok) {
        return res.status(201).json({"msg": result.msg})
    } else {
        return res.status(400).json({"msg": result.msg})
    }
}

module.exports = userRegist