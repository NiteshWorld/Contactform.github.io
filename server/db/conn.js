const mongoose = require('mongoose');

const DB = 'mongodb+srv://Nitesh:Nitesh@12345@cluster0.30ne4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection Successful');
}).catch((err) => console.log('No Connection'));