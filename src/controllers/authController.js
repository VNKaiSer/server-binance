const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient()

class AuthController {
    async login(req, res) {
        prisma.users.findUnique({
            where: {
                phone: req.body.phone,
                password: req.body.password
            }
        }).then((user) => {

            if (user) {
                var token = jwt.sign(user.id, 'mk')
                res.status(200).json({
                    message: "Login success",
                    data: token
                })
            } else {
                res.status(400).json({
                    message: "Login failed",
                    data: {}
                })
            }
        }).catch((error) => {
            res.status(500).json({
                message: "Login failed",
                data: {}
            })
        })
    }
}

module.exports = new AuthController();