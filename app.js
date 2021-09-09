const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/mongooseSchema.js");
require("./models/mongooseSchema.js");
const cors = require('cors');
require ("./db.js");
const adminRoutes = require('./admin.js');
const userRoutes = require('./user.js');
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:3000'}))
app.use('/products',adminRoutes);
app.use('/products',userRoutes);





app.listen(3000, ()=>{
    console.log("listening on the port 3000");
})