const express = require('express')
const userController = require('../controllers/userController')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({message: 'get user'})
})
router.get('/regisration', (req, res) => {
    res.json({message: 'registating'})
})
router.post('/regisration', userController.registration)

router.get('/login', (req, res) => {
    res.json({message: 'login*-'})
})
router.post('/login', userController.login)
router.get('/auth', (req, res) => {
    res.json({message: 'sss'})
})


module.exports = router