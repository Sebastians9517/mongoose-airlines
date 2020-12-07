const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {type: String,
              required: true,
              enum: ['American', 'Southwest', 'United', 'Delta']},
    airport: {type: String,
              required: true,
              enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ORD'], default: 'ORD'},
    flightNo: {type: Number,
               required: true, min: 10, max: 9999},
    departs: {type: Date,
              default: () => {
                  //Date.now() + 365 * 24 * 60 * 60 * 1000
                  return moment().add(1, 'year')
              }}
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema)
