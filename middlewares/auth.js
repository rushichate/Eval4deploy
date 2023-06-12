const jwt = require("jsonwebtoken");
const { redis } = require("../config/redis");
require("dotenv").config();

const auth = async (req,res,next)=>{
    try{
        const tokenKey = req?.cookies?.access_token_key;
        const accessToken = await redis.get(tokenKey);
        const isTokenValid = await jwt.verify(
            accessToken,process.env.JWT_ACCESS_TOKEN_KEY
        );
        if(!isTokenValid){
            return res.status(400).send({message:"JWT expired"})
        }
        req.payload = isTokenValid;
        next();
    }catch(err){

        res.status(400).send({message:"Authintication error",error:err.message})
    }
}

module.exports = {
    auth
}