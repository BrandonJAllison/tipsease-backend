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

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.getById(id)
    .then(tipper => res.status(200).json(tipper))
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
