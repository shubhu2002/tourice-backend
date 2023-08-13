import User from "../models/User.js";

// create User
export const createUser = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            message: "Successfully Created",
            data: savedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Falied to create "
        })
    }
};


// update User
export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updateUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: " Update Failed !!",
        })
    }
};

// delete User
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Successfully Deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: " Deletion Failed !!",
        })
    }
};

// getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).json({
            success: true,
            message: "Successfully Found ",
            data: user,
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: " No Data Found !!",
        })
    }
};

// getAllUser User
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            message: "Successfull ",
            data: users,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: " No Data Found !!",
        })
    }
};