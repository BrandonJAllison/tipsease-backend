/////============ DEPENDENCIES ============/////////

const express = require('express');
const bcrypt = require('bcryptjs');
const auth = require('../../api/middleware/auth');
const router = express.Router();
const jwt = require('jsonwebtoken');
const imageParser = require('../../config/cloudinary');
const db = require('../../helpers/dbTippeesHelpers');
/////============ ROUTES ============/////////

router.get('/', (req, res) => {
  db.getTippees()
    .then(tippees => res.status(200).send(tippees))
    .catch(err => next(err));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db.getByTippeeId(id)
    .then(tippee => res.status(200).json(tippee))
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', imageParser.single('image'), (req, res) => {
  const image = {};
  const tippee = req.body;
  if (req.file) {
    tippee.photo_url = req.file.url;
    tippee.photo_public_id = req.file.public_id;
  }

  if (
    !tippee.first_name ||
    !tippee.last_name ||
    !tippee.email ||
    !tippee.password
  ) {
    res.status(400).json({
      errMessage:
        'Please add a first name, last name, and an email! Make a fake pass for now.'
    });
  }
  db.insertTipperData(tippee)
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

  db.updateTippee(id, data)
    .then(data => {
      if (data === 0) {
        //if nothing gets returned
        res.status(404).json({ errorMsg: 'Sorry, that user does not exist!' });
      }
      {
        db.getByTippeeId(id).then(tippee => {
          res.status(200).json(tippee);
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

  db.removeTippee(id)
    .then(response => {
      if (response === 1) {
        res.status(200).json({ message: 'Well done!' });
      } else {
        res.status(404).json({
          message:
            "Yo, check yoself befo' u wrek urself - That tippee doesn't exist."
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

//// TIPS ROUTES ////////
router.get('/:id/tips', (req, res) => {
  const id = req.params.id;

  db.getTipeeTips(id)
    .then(tips => res.status(200).send(tips))
    .catch(err => next(err));
});

router.post('/:id/tips', (req, res) => {
  const tip = req.body;
  // i want the tippie's id
  db.addTip(tip)
    .then(response => {
      res.status(201).json({ message: 'tip successfully entered!' });
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

module.exports = router;
