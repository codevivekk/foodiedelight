import mongoose from "mongoose";
import Restarunt from "../model/resturant.model.js"

export const getResturant = async (req, res) => {
  try {
    const { page = 1, limit = 10,city = '', restaurantName = '' } = req.query;
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const searchQuery = {};
    if (city) {
      searchQuery.city = { $regex: city, $options: 'i' };
    }
    if (restaurantName) {
      searchQuery.resturantName = { $regex: restaurantName, $options: 'i' };
    }
    const data = await Restarunt.find(searchQuery)
      .limit(limitNumber)
      .skip((pageNumber - 1) * limitNumber);

    const total = await Restarunt.countDocuments(searchQuery);
    const isLast = pageNumber * limitNumber >= total;
    res.json({
      data,
      total,
      isLast,
      page: pageNumber,
      pages: Math.ceil(total / limitNumber)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addResturant = async (req, res) => {
  const body = req.body;
  try {
    const resturant = await Restarunt.create(body);
    resturant.save();
    res.status(201).json({ msg: "Resturant Uploaded!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getResturantbyId = async (req, res) => {
  const { id } = req.query;
  try {
    const restaurant = await Restarunt.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteResturant = async (req, res) => {
  const { id } = req.query;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  try {
    const deletedRestaurant = await Restarunt.findByIdAndDelete(id);
    if (!deletedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json({ message: 'Restaurant deleted successfully', data: deletedRestaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateResturant = async (req, res) => {
  const { id } = req.query;
  const updateData = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  try {
    const updatedRestaurant = await Restarunt.findByIdAndUpdate(id, updateData, {
      runValidators: true,
    });
    if (!updatedRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.status(200).json({ message: 'Restaurant updated successfully', data: updatedRestaurant });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
