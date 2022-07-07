const User = require('../model/User');






 const getAllUsers = async(req,res,next) => {

    try {
        const users = await User.find({});

        res.json({users})
    } catch (err) {
        return res.status(404).json({message:"No user found"});
    }
}


exports.getAllUsers = getAllUsers;