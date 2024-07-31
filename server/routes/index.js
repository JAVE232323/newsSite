const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')

router.get('/', (req, res) => {
    res.status(200).json({message: "working"})
})

router.post('/', (req, res) =>{
    res.send('Got a POST request');
})


module.exports = router