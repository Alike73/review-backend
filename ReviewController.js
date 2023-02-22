
const ReviewModel = require('./ReviewModel');


// GET
module.exports.getReview = async(req, res) => {
    const userReview = await ReviewModel.find();
    res.send(userReview)
}

// POST
module.exports.saveReview = async(req, res) => {
    const { name, email, question1, question2, question3, question4, message, starsRate } =req.body;
    ReviewModel.create({ name, email, question1, question2, question3, question4, message, starsRate })
    .then((data) => {console.log('Review is added!!!')
    res.send(data)
    })
    
}