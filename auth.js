const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    if(req.query.isAdmin){
        next();
    }else{
        res.send("you are not the admin");
    }
}

module.exports = auth;