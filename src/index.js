const restify = require('restify');
const bodyParser = require('body-parser');
const Routes = require('./routes');
require('./config/database/index');

const server = restify.createServer({ name: "API-RESTIFY", version: '1.0.0'});

server.get('/version', (req, res, next)=>{
    res.send({"message": "API v1.0.0"});
    next();
})
server.use(bodyParser.json({urlencoded: true}));
server.listen(3000, ()=>{
    console.log('API LISTENING IN 3000');
});

Routes(server);