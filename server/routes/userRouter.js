const Router = require('express')
const router = new Router

router.post('/regisration',)
router.post('/login',)
router.get('/auth', (req, res) => {
    res.json({message: "all works"})
})


module.exports = router