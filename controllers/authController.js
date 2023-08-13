import User from "../models/User.js"
import bcrypt from "bcryptjs"
// register
export const register = async (req, res) => {
    try {

        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save();

        res.status(200).json({
            success: true,
            message: "Successfully Created"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed To Create"
        })
    }
};

// // login
export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not Found"
            })
        }

        const checkPassword = bcrypt.compare(password,user.password);

        if (!checkPassword) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Email or Password"
            })
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed To Create"
        })
    }
};