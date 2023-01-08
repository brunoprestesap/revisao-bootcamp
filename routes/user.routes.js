import express from 'express'

const userRoute = express.Router();

const bd = [
    {
        name: "Bruno Alexandre",
        age: 37,
        rule: "Servidor Público",
        setor: "NUTEC/SESIS"
    }
]

userRoute.get('/', (req, res) => {
    res.status(200).json(bd)
})

export default userRoute;