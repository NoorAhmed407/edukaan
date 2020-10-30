const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//setup express app
const app = express();

//Initialized Cors
app.use(cors());


//connect to mongo db
mongoose.connect('mongodb://localhost/e_dukaan', 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true,
    keepAlive: 1, 
});

mongoose.Promise = global.Promise;

app.use(express.json());
app.use('/uploads', express.static('uploads'));
//Initializing Routes
app.use('/api/products',require('./routes/productsAPI'));



//starting server
app.listen(process.env.port || 4000,()=>{
    console.log('server started');
});