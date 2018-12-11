const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Painting = require('../models/painting');
const User = require('../models/user');


mongoose.connect(dbURI);


const userIds = [
  '5be9b02777e350fe07977fb0',
  '5be9b02777e350fe07977fb1',
  '5be9b02777e350fe07977fb2'
];

const userData = [
  {
    _id: userIds[0],
    username: 'a',
    email: 'a@a',
    password: 'a'
  }
];


const paintingData = [
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
  },
  {
    name: 'The Dream of the Fishermans Wife',
    artist: 'Katsushika Hokusai',
    image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Katsushika-Hokusai-The-Dream-of-the-Fishermans-Wife-detail.jpg',
    contemporary: false
  },
  {
    name: 'The Lion of the Kingdom that Transcends Death',
    artist: 'Takashi Murakami',
    image: 'https://gagosian.com/media/images/exhibitions/2018/takashi-murakami-none/qf3OhlnkmP88_2340x1316.jpg',
    contemporary: true
  }
];

Painting.collection.drop();
User.collection.drop();

User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
    Painting.create(paintingData)
      .then(paintings => {
        console.log(`Created ${paintings.length} paintings`);
        mongoose.connection.close();
      });
  });
