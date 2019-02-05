/////============ DEPENDENCIES ============/////////

const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();
const jwt = require('jsonwebtoken');
const imageParser = require('../../config/cloudinary');
const db = require('../../helpers/dbTippersHelpers');
/////============ ROUTES ============/////////

router.get('/', (req, res) => {
  db.getTippers()
    .then(tippers => res.status(200).send(tippers))
    .catch(err => next(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.getByTipperId(id)
    .then(tipper => res.status(200).json(tipper))
    .catch(err => {
      res.status(500).json(err);
    });
});

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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  db.updateTipper(id, data)
    .then(data => {
      if (data === 0) {
        //if nothing gets returned
        res.status(404).json({ errorMsg: 'Sorry, that user does not exist!' });
      }
      {
        db.getByTipperId(id).then(tipper => {
          res.status(200).json(tipper);
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        err,
        message:
          'Not sure, but are you sure you put in a unique email? Try that first!'
      });
    });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.removeTipper(id)
    .then(response => {
      if (response === 1) {
        res.status(200).json({ message: 'Well done!' });
      } else {
        res.status(404).json({
          message:
            "Yo, check yoself befo' u wrek urself - That tipper doesn't exist."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        err,
        message: 'Not sure m8, but something went wrong. Try again?'
      });
    });
});

module.exports = router;
