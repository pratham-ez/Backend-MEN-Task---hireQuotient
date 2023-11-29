const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter title for the post"],
        trim: true

    },
    description: {
        type: String,
        required: [true, "Please enter post description"],

    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true,
            },
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter post category "],
    },
    numofComments: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }

        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    },



})

module.exports = mongoose.model("Post", postSchema);