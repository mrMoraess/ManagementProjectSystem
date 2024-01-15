// realizar operacoes intermediarias entre o controller e o model
const validator = require("validator")

const validateBody = (req, res, next) => {
    const { body } = req

    if (validator.isEmpty(body.name) || body.name === undefined) {
        return res.status(400).json({"msg": "This name isn't valid."})
    } else if (!validator.isEmail(body.email) || body.email === undefined) {
        return res.status(400).json({"msg": "Email isn't valid."})
    } else if (!validator.isStrongPassword(body.password) || body.password === undefined) {
        return res.status(400).json({"msg": "Password must be strong."})
    }

    next()
}

module.exports = validateBody