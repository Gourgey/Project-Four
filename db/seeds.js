const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Painting = require('Painting');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Painting.create([
    {

    }
  ])




    .then(burgers => {
      console.log(`${burgers.length} burgers created`);
      User
        .create(userData)
        .then(users => {
          console.log(`${users.length} users created`);
        })
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close());
    });
});
