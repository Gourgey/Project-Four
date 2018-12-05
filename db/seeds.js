const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Painting = require('Painting');


mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Painting.create([
    {
      name: 'The Dream of the Fishermans Wife',
      artist: 'Katsushika Hokusai',
      image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Katsushika-Hokusai-The-Dream-of-the-Fishermans-Wife-detail.jpg',
      contemporary: false
    },
    {
      name: 'Sunrise over the Eastern Sea',
      artist: 'Fujishima Takeji',
      image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Fujishima-Takeji-Sunrise-over-the-Eastern-Sea-detail.jpg',
      contemporary: false
    },
    {
      name: 'Im in a Dream',
      artist: 'Naomi Okubo',
      image: 'http://www.residencyunlimited.org/wp-content/uploads/2018/01/naomi.jpg',
      contemporary: true
    },
    {
      name: 'Moe',
      artist: 'Ikenaga Yasunari',
      image: 'http://ikenaga-yasunari.com/paintings/124x.jpg',
      contemporary: true
    }
  ])

    .then(paintings => {
      console.log(`${paintings.length} paintings created`)
        .catch(err => console.log(err))
        .finally(() => mongoose.connection.close());
    });
});