const express = require('express')
const sequelize = require('./db')
const router = require('./routes/index')
const cors = require('cors')

const userRouter = require('./routes/userRouter')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)


app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: "working"})
})

app.post('/', (req, res) =>{
    res.send('Got a POST request');
})


const start = async () => {
    try{
        await sequelize.authenticate
        await sequelize.sync
        app.listen(PORT, () => 
            console.log('Server started on port ' + PORT)
        )
    }
    catch(e){
        console.log(e)
    }
}


start()