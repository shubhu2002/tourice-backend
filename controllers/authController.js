import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


// registeration
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
    const pass = req.body.password;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not Found"
            })
        }

        const checkPassword = await bcrypt.compare(pass, user.password);

        if (!checkPassword) {
            return res.status(401).json({
                success: false,
                message: "Incorrect Email or Password"
            })
        }

        const { password, role, ...rest } = user._doc;

        // create jwt token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" })

        // set token in browser cookies and send response to client
        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({token,data:{...rest},role})

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed To login"
        })
    }
};