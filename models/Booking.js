import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String
        },
        userEmail: {
            type: String
        },
        tourName: {
            type: String,
            required : true
        },
        fullName: {
            type: String,
            required: true
        },
        guests: {
            type: Number,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true
        },
        totalAmount: {
            type: Number,
            requried: true
        }
    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);