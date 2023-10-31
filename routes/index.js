var express = require('express');
var router = express.Router();
const multer = require("multer");
const api = require('../controller/Image')




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    if (file) {
      cb(null, "./upload/");
    } else {
      cb(null, "./upload/");
    }
  },
  filename: (req, file, callBack) => {
    callBack(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
});
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/get", api.get);
router.post("/newAdd", upload.any(), api.Image_upload);

module.exports = router;
