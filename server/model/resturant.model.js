import mongoose from "mongoose";

const resturantSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^[A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z]{2,}$/,
        unique: true 
    },
    phoneNumber: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); 
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    photos: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true,
    },
    priceRange: {
        type: Number,
        required: true,
    },
    resturantName: {
        type: String,
        required: true,
    }
});

export default mongoose.model('resturant', resturantSchema)