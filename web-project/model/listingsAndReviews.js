const mongoose = require('mongoose');

const reqSchema = mongoose.Schema();
// ({
//     listing_url: { type: String },
//     name: String,
    // summary: String,
    // space: String,
    // description: String,
    // neighborhood_overview: String,
    // notes: String,
    // transit: String,
    // access: String,
    // interaction: String,
    // house_rules: String,
    // property_type: String,
    // room_type: String,
    // bed_type: String,
    // minimum_nights: String,
    // maximum_nights: String,
    // cancellation_policy: String,
    // last_scraped: Date,
    // calender_last: Date,
    // first_review: Date,
    // last_review: Date,
    // accommodates: Number,
    // bedrooms: Number,
    // beds: Number,
    // number_of_reviews: Number,
    // bathrooms: Number,
    // amenities: Array,
    // price: Number,
    // security_deposit: Number,
    // cleaning_fee: Number,
    // extra_people: Number,
    // guests_included: Number,
    // images: Object,
    // host: Object,
    // address: Object,
    // availability: Object,
    // review_scores: Object,
    // reviews: Array
// })

module.exports = mongoose.model('listingsAndReviews', reqSchema);