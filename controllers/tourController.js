import Tour from "../models/Tour.js";

// create tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)
    try {
        const savedTour = await newTour.save();

        res.status(200).json({
            success: true,
            message: "Successfully Created",
            data: savedTour
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Falied to create "
        })
    }
};


// update tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updateTour
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: " Update Failed !!",
        })
    }
};

// delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
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

// getSingle tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id);
        res.status(200).json({
            success: true,
            message: "Successfully Found ",
            data: tour,
        })

    } catch (error) {
        res.status(404).json({
            success: false,
            message: " No Data Found !!",
        })
    }
};

// getAlltour tour
export const getAllTour = async (req, res) => {

    try {
        const tours = await Tour.find({});
        res.status(200).json({
            success: true,
            message: "Successfull ",
            data: tours,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: " No Data Found !!",
        })
    }
};


// getTourBySearch
export const getTourBySearch = async (req, res) => {
    const title = new RegExp(req.query.title,"i");

    try {  
        const tours = await Tour.find({title});
        res.status(200).json({
            success: true,
            message: "Successfull ",
            data: tours,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: " No Data Found !!",
        }) 
    }
};


// getFeaturedTour
export const getFeaturedTour = async (req, res) => {
    try {  
        const tours = await Tour.find({featured:true});
        res.status(200).json({
            success: true,
            message: "Successfull ",
            data: tours,
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: " No Data Found !!",
        }) 
    }
};