/////============ DEPENDENCIES ============/////////

const express = require('express');
const bcrypt = require('bcryptjs');
const auth = require('../../api/middleware/auth');
const router = express.Router();
const jwt = require('jsonwebtoken');
const imageParser = require('../../config/cloudinary');
const db = require('../../helpers/dbTippeesHelpers');
/////============ ROUTES ============/////////

router.post('/', imageParser.single('image'), (req, res) => {
  const image = {};
  const tipper = req.body;
  if (req.file) {
    tipper.photo_url = req.file.url;
    tipper.photo_public_id = req.file.public_id;
  }

  if (
    !tipper.first_name ||
    !tipper.last_name ||
    !tipper.email ||
    !tipper.password
  ) {
    res.status(400).json({
      errMessage:
        'Please add a first name, last name, and an email! Make a fake pass for now.'
    });
  }
  db.insertTipperData(tipper)
    .then(id => {
      db.getByTipperId(id[0]).then(data => {
        res.status(201).json(data);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
