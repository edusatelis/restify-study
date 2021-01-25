const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/restify-api', {useNewUrlParser: true, useUnifiedTopology: true})
.then(_=>{
    console.log("Database ::: ON");
}).catch(error=> console.log(error.message));