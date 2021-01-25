const authCtrl = require("../controllers/auth");

function Routes(server){
    server.post('/signup', authCtrl.signup);
}

module.exports = Routes;