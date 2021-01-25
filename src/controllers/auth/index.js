const authService = require("./service");

async function signup(req,res,next){
    try {
        const signup = await authService.createUser(req.body);
        if(signup)
            res.send(200, signup);
    } catch (error) {
        res.send(400, error.message);
    }
}


module.exports = {
    signup
}