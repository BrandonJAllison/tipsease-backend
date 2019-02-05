////============ DEPENDENCIES ============/////////

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const server = express();

////============ MIDDLEWARE ============/////////

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('short'));

////============ ROUTES ============/////////

/// tippers, tippees, auth, register routes necessary
server.get('/', (req, res) => {
  res.send('All good here! Keep up the development!');
});

tippersRouter = require('./routes/tippersRouter');
tippeesRouter = require('./routes/tippeesRouter');
// we will need an auth route in the future

server.use('/api/tippers', tippersRouter);
server.use('/api/tippees', tippeesRouter);

module.exports = server;
