const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'get user'})
})
router.post('/regisration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', (req, res) => {
    res.json({message: 'sss'})
})


module.exports = router