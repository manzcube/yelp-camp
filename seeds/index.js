
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
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20 + 10)
        const newCampGround = new Campground({
            author: '61f02134911926ccc1d5cf31',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Every time you rap, you suck you duck big bang ping pong ding don big punch get lunch my lanch my ranch is batch fight without knife I have your wife and wifi',
            price
        })
        await newCampGround.save()
    }
}

seedDB().then(() => {
    mongoose.connection.close()
})