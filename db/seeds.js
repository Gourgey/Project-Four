const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Painting = require('../models/painting');
const User = require('../models/user');
const Purchase = require('../models/purchases');
const Message = require('../models/messages');


mongoose.connect(dbURI);


const userIds = [
  '5be9b02777e350fe07977fb0',
  '5be9b02777e350fe07977fb1',
  '5be9b02777e350fe07977fb2'
];

const userData = [
  {
    _id: userIds[0],
    username: 'Josh',
    email: 'josh@josh',
    password: 'josh',
    picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/220px-Philip_Fry.png'
  },
  {
    _id: userIds[1],
    username: 'b',
    email: 'b@b',
    password: 'b',
    picture: 'https://cdn0.iconfinder.com/data/icons/toilet-and-restrooms-symbols/232/toilet005-512.png'
  },
  {
    _id: userIds[2],
    username: 'a',
    email: 'a@a',
    password: 'a',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Aiga_toiletsq_men.svg'
  }
];


const messageData = [
  {
    from: userIds[0],
    to: userIds[1],
    content: 'Yo'
  }, {
    from: userIds[1],
    to: userIds[0],
    content: 'Yo'
  }, {
    from: userIds[0],
    to: userIds[1],
    content: 'Bored?'
  }, {
    from: userIds[1],
    to: userIds[0],
    content: '.....yup'
  }
];


const paintingData = [
  {
    name: 'Sunrise over the Eastern Sea',
    artist: 'Fujishima Takeji',
    image: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Fujishima-Takeji-Sunrise-over-the-Eastern-Sea-detail.jpg',
    price: 2000
    // contemporary: false
  },
  {
    name: 'Im in a Dream',
    artist: 'Naomi Okubo',
    image: 'http://www.residencyunlimited.org/wp-content/uploads/2018/01/naomi.jpg',
    price: 34000
    // contemporary: true
  },
  {
    name: 'Moe',
    artist: 'Ikenaga Yasunari',
    image: 'http://ikenaga-yasunari.com/paintings/124x.jpg',
    price: 800
    // contemporary: true
  },
  {
    name: 'The Lion of the Kingdom that Transcends Death',
    artist: 'Takashi Murakami',
    image: 'https://gagosian.com/media/images/exhibitions/2018/takashi-murakami-none/qf3OhlnkmP88_2340x1316.jpg',
    price: 85000
    // contemporary: true
  }
];

Purchase.collection.drop();

Painting.collection.drop();
User.collection.drop();

User.create(userData)
  .then(users => {
    console.log(`Created ${users.length} users`);
    Painting.create(paintingData)
      .then(paintings => {
        console.log(`Created ${paintings.length} paintings`);
        Message.create(messageData)
          .then(messages => {
            console.log(`Created ${messages.length} messages`);
            mongoose.connection.close();
          });
      });
  });
