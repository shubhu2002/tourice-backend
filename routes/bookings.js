import express from "express";
import { createBooking } from "./../controllers/bookingController.js"

const router = express.Router();

// create Booking
router.post("/", createBooking);

export default router;