const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
require('dotenv').config()
const { default: mongoose } = require("mongoose");
const router = require('./routes/routes');

const PORT = process.env.PORT;
const URI = process.env.URI;

app.use('/api', router);

mongoose.connect(URI).then(()=> {
    app.listen(PORT,()=>{
        console.log("Am listen at port 4000 and connected")
    })
}).catch((err)=> {
    console.log(err.message);
})


