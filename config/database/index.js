const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:123mudar@@cluster0.ffxh9.mongodb.net/restify-api', {useNewUrlParser: true, useUnifiedTopology: true})
.then(_=>{
    console.log("Database ::: ON");
}).catch(error=> console.log(error.message));