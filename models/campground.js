const mongoose = require('mongoose')
const Review = require('./review')
const { Schema } = mongoose;






const ImageSchema = new Schema({
    url: String,
    filename: String
})


// ImageSchema.virtual('thumbnail').get(function() {
//     return this.url.replace('/upload', '/upload/w_300')  
// })  Doesn't work for the moment.


const opts = { toJSON: { virtuals: true } }

const CampgroundSchema = new Schema ({
    title: String,
    images: [ImageSchema],
    geometry: {
        type: {
            type: String, 
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts)


CampgroundSchema.virtual('properties.popUpMarkup').get(function() {
    return `<a href="/campgrounds/${this._id}" class="text-primary">${this.title}</a>`
})




CampgroundSchema.post('findOneAndDelete', async function (campground) {   
    if(campground.reviews.length) {       
        const res = await Review.deleteMany({_id: {$in: campground.reviews}})
    }
})


module.exports = mongoose.model('Campground', CampgroundSchema);


