/////============ DEPENDENCIES ============/////////

const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const jwt = require('jsonwebtoken');
const imageParser = require('../../config/cloudinary');
const db = require('../../helpers/dbHelpers');
/////============ ROUTES ============/////////

router.get('/', (req, res) => {
  db.getTippers()
    .then(tippers => res.status(200).send(tippers))
    .catch(err => next(err));
});

module.exports = router;
