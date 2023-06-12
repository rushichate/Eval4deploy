const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { UserModel } = require("../modules/user.model");




const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const isUserValid = await UserModel.findOne({email});
        if(!isUserValid){
            return res.status(400).send({msg:"Please signup"})
        }
        const isPasswordCorrect = bcrypt.compareSync(password,isUserValid.password)
    }
}