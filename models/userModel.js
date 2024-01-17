const connection = require("./connection.js")

function userExists(username) {
    connection.execute("SELECT * FROM users", (err, res) => {
        if (err) {
            return console.log(err)
        } else {
            flag = false
            for (let i = 0; i < res.length(); i++) {
                if (res[i].username === username) {
                    flag = true
                    break
                }
            }
            return flag
        }
    })
}

const createNewUser = (body) => {
    console.log(body)
    return body
}

function testConnect() {
    connection.execute("SELECT * FROM users", (err, res) => {
    if (err) {
        return console.log(err)
    } 
    return console.log(res[0].username)
})}

testConnect()

module.exports = { 
    createNewUser
}