const db = require('../data/dbConfig');

const getTippees = () => {
  return db
    .select('id', 'first_name', 'last_name', 'email', 'photo_url')
    .from('tippers');
};

const getByTippeeId = id => {
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

const insertTippeeData = data => {
  // we need to be able to post whatever data is passed in into our db
  return db('tippers').insert(data);
};

const removeTippee = id => {
  return db('tippers')
    .where('tippers.id', id)
    .del();
};

const updateTippee = (id, data) => {
  return db('tippers')
    .where('tippers.id', id)
    .update(data);
};

///// FOR TIPS ////////

const getTipeeTips = id => {
  return db('tips').where('tips.tipper_id', id);
};

const addTip = tip => {
  //   return db('tips')
  //     .where('tippees.id', id)
  //     .insert(tip);

  return db('tips').insert(tip);
};

module.exports = {
  getTippees,
  getByTippeeId,
  insertTippeeData,
  updateTippee,
  removeTippee,
  addTip,
  getTipeeTips
};
