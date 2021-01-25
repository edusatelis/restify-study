const User = require("../../config/models/user");
const validarCpf = require('validar-cpf');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authService = {

    async createUser(body){
        var { nome, cpf, email, password } = body;
        try {

            const userExist = await User.findOne({ email });

            if(userExist != null)
                throw new Error("Email já existente");

            const cpfExist = await User.findOne({cpf});
            if(cpfExist != null)
                throw new Error("CPF já existente");
            
            const validCpf = await validarCpf(cpf);

            if(validCpf === true){

                    password = bcrypt.hashSync(password,10);

                const user = new User({
                    nome,
                    cpf,
                    email,
                    password
                });
    
                
                return await user.save();
            }else{
                throw new Error('CPF invalido!!')
            }

        } catch (error) {
            throw new Error(error);
        }
    },

    async login(body){
        const { email, password } = body;

        try {
            const validEmail = await User.findOne({email});
         const comparePassword = bcrypt.compareSync(password, validEmail.password);
         if(comparePassword === true){
             return await jwt.sign(email, '777a847b40e856f92d8f45fba3615637');
         }

        } catch (error) {
            throw new Error(error);
        }
    }

}


module.exports = authService;