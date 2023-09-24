const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class UserController {
    async addUsers(req, res) {

        await prisma.users.create({
            data: {
                name: req.body.name,
                phone: req.body.phone,
                password: req.body.password
            }
        }).then((data) => {
            res.status(200).json({
                message: "Add user success",
                data: data
            })
        }).catch((error) => {
            res.status(500).json({
                message: "Add user failed",
                data: {}
            })
        })


    }
}

module.exports = new UserController();