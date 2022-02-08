var express = require('express');
var router = express.Router();
const cate = require('../controllers/cateController')
/* GET home page. */
router.get('/', cate.getCate);
router.get('/getCatePost', cate.getCatePost)

module.exports = router;
