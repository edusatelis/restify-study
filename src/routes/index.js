const authCtrl = require("../controllers/auth");

function Routes(server){
    server.post('/signup', authCtrl.signup);
    server.post('/login', authCtrl.login);

}

module.exports = Routes;