const multer = require('multer');
const path = require('path');

module.exports = {
  // new diskStorage
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, callback) {
      callback(null, file.originalname);
    },
  }),
};
