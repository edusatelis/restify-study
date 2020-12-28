const restify = require('restify');
require('./config/database/index');

const server = restify.createServer({ name: "API-RESTIFY", version: '1.0.0'});

server.get('/version', (req, res, next)=>{
    res.send({"message": "API v1.0.0"});
    next();
})

server.listen(3000, ()=>{
    console.log('API LISTENING ON 3000');
});
