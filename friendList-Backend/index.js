//create server

const express = require('express');
const app = express();
const cors = require('cors');
// require mongofile
const dbConnection = require('./mongoSetup');
//require routesfile
const router = require('../friendList/routes/friend/friend-routes')

// app.options("*" , cors())

app.use(express.json());
app.use(router);
// app.use(friendModel);

app.use(cors(
    {
        origin : "*",
    }
     
))

//assigned port

app.listen(8080,()=>
{
    console.log("server is on port 8080");
})








