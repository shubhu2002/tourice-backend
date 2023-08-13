import express from "express";
import { createTour,updateTour,deleteTour,getSingleTour,getAllTour,getTourBySearch,getFeaturedTour } from "./../controllers/tourController.js";

const router = express.Router();

// create new tour
router.post("/",createTour);

// update tour
router.put("/:id",updateTour);

// delete tour
router.delete("/:id",deleteTour);

// getSingle tour
router.get("/:id",getSingleTour);

// getAll tour
router.get("/",getAllTour);

// get Tour By Search
router.get("/search/getTourBySearch",getTourBySearch)
router.get("/search/getFeaturedTours",getFeaturedTour);


export default router;