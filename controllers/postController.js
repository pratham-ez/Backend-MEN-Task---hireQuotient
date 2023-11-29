const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Post  = require("../models/postModel")



// create Post 
exports.createPost = catchAsyncErrors(async(req, res, next) => {

    // req.body.user = req.user.id;
    const post = await Post.create(req.body);

    res.status(201).json({
        success: true,
        post
    })
})


// get post 

exports.getAllPosts = catchAsyncErrors( async (req, res) => {
    
    const posts = await Post.find();

    res.status(200).json({
        success: true,
        posts
    })
})

// create review 
exports.createPostReview = catchAsyncErrors(async (req, res, next) => {
    const { comment, postId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        comment,
    };

    const post = await Post.findById(postId);

    const isReviewed = post.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        post.reviews.forEach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    } else {
        post.reviews.push(review);
        post.numofComments = post.reviews.length;
    }

    await post.save({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});