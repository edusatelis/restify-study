const User = require("../../config/models/user");

const authService = {

    async createUser(body){
        const { nome, email, password } = body;
        try {


            const userExist = User.findOne({ email });

            if(userExist)
                throw new Error("Email já existente");

            const user = new User({
                nome,
                email,
                password
            });

            
            return await user.save();

        } catch (error) {
            throw new Error(error);
        }
    }

}


module.exports = authService;