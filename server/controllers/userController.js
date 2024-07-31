class UserController{
    async registration(req, res){
        res.json({message: 'registration '})
    }
    async login(req, res){

    }
    async check(req, res){

    }
}

module.exports = new UserController()