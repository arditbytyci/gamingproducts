const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SERCRET_KEY = "MyKey";
const signup = async (req,res,next) => {

    const {name,email,password} = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({email:email});
    } catch (error) {
        console.log(error);
    }

    if(existingUser) {
        return res.status(400).json({message:"User already exists!"});
    }

    const hashedPw = bcrypt.hashSync(password);


    const user = new User({
        name,
        email,
        password: hashedPw
    });

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({message:user});

}

const login = async (req,res,next) => {
    const {email,password} = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({email:email});
    } catch (err) {
       return new Error(err);
    }

    if(!existingUser) {
        return res.status(400).json({message:"User not found"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);

    if(!isPasswordCorrect) {
        return res.status(400).json({message:"Password is incorrect"});
    }

    const token = jwt.sign({id: existingUser._id}, JWT_SERCRET_KEY,{
        expiresIn : "1hr"
    });



    return res.status(200).json({message:"Successfully logged in!",user:existingUser,token})

}

const verifyToken = (req,res,next) => {
    const headers = req.headers[`authorization`];
     const token = headers.split(" ")[1]; 


    
    if(!token) {
        res.status(404).json({message:"No token found"});
    }
    jwt.verify(String(token),JWT_SERCRET_KEY,(err,user) => {
        if(err) {
            return res.status(400).json({message:"Invalid token"});
        }
        
        req.id = user.id;
    });
        next();
};

const getUser = async (req,res,next) => {
    const userId = req.id;
    let user;

    try {
        user = await User.findById(userId,"-password");
    } catch (err) {
        return new Error(err)
    }

    if(!user) {
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({user});

}

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;