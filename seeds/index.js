
const mongoose = require('mongoose')
const Campground = require('../models/campground')
const { places, descriptors } = require('./seedHelpers')
const cities = require('./cities')
//Mongoose connection and verification

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 120; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20 + 10)
        const newCampGround = new Campground({
            author: '61f02134911926ccc1d5cf31',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Description for a campground.',
            price,
            geometry: {
              type: "Point",
              coordinates: [ 
                cities[random1000].longitude,
                cities[random1000].latitude,
              ]
            },
            images: [
              {
                url: 'https://res.cloudinary.com/bubafohju/image/upload/v1643738524/YelpCamp/f5y0qz7urm15pvluordn.png',
                filename: 'YelpCamp/f5y0qz7urm15pvluordn'
              },
              {
                url: 'https://res.cloudinary.com/bubafohju/image/upload/v1643738524/YelpCamp/h4kpo4rmocqdowoh7orx.jpg',
                filename: 'YelpCamp/h4kpo4rmocqdowoh7orx'
              },
              {
                url: 'https://res.cloudinary.com/bubafohju/image/upload/v1643738525/YelpCamp/xmijeifmcvgtpqndwih7.jpg',
                filename: 'YelpCamp/xmijeifmcvgtpqndwih7'
              }
            ]
        })
        await newCampGround.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})