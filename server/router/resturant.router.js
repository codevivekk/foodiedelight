import express from "express";
const resturantRouter = express.Router();
import {
  getResturant,
  getResturantbyId,
  updateResturant,
  deleteResturant,
  addResturant,
} from "../controller/resturant.controller.js";

resturantRouter.get("/get-resturant", getResturantbyId);
resturantRouter.post("/add-resturants", addResturant);
resturantRouter.get("/get-resturants", getResturant);
resturantRouter.patch("/update-resturant", updateResturant);
resturantRouter.delete("/delete-resturant", deleteResturant);

export default resturantRouter;
