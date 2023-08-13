import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({ status: true, message: "Successfully Booked", data: savedBooking })
    } catch (error) {
        res.status(500).json({ status: false, message: "Internal Server Error " })

    }
};