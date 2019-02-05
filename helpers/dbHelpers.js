// math functions for random number generaton feat. David
const db = require('../data/dbConfig');

const random = (a = 0, b = 10) => {
  return Math.floor(Math.random() * (b - a) + a);
};

const reallyRandom = (a = 0, b = 10) => {
  if (random(0, 10) > 5) {
    return random(1, 100);
  } else {
    return null;
  }
};

const getTippers = () => {
  return db
    .select('id', 'first_name', 'last_name', 'email', 'photo_url')
    .from('tippers');
};

const getById = id => {
  return db('tippers')
    .where('tippers.id', id)
    .select(
      'tippers.id',
      'tippers.first_name',
      'tippers.last_name',
      'tippers.email',
      'tippers.photo_url'
    );
};

const insertData = data => {
  // we need to be able to post whatever data is passed in into our db
  return db('tippers').insert(data);
};

const removeTipper = id => {
  return db('tippers')
    .where('tippers.id', id)
    .del();
};

module.exports = {
  random,
  reallyRandom,
  getTippers,
  getById,
  insertData,
  removeTipper
};
