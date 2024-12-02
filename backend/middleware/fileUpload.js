const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../uploads/videos");
  },
  filename: function (req, file, cb) {
    const originalname = file.originalname; // Get the original filename
    cb(null, originalname)
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
