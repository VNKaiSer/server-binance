const userRoute = require('./src/routes/userRoute')
const authRoute = require('./src/routes/authRoute')


const cors = require('cors')
const express = require('express')
const app = express()
app.use(express.json())
app.use(cors())
const dotenv = require('dotenv')
dotenv.config()



app.use(express.json())
app.use(cors())

app.use('/api', cors({ origin: '*' }), authRoute);
app.use('/api', cors({ origin: '*' }), userRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port} .`)
})
