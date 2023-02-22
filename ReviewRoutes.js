
const { Router } = require('express');
const router = Router();
const { getReview, saveReview } = require('./ReviewController');

router.get('/', getReview)
router.post('/saveReview', saveReview)

module.exports = router;