const express = require('express');
const router = express.Router();

const {
    CreatePost,
    getAllPost,
    getPost,
    updatePost,
    detelePost
} = require('../controller/projectController');

router.route('/').get(getAllPost).post(CreatePost);
router.route('/:id').get(getPost).put(updatePost).delete(detelePost);

module.exports = router;