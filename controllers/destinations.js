const Destination = require('../models/destination');
const Flight = require('../models/flight');

module.exports = {
    new: newDestination,
    addToDestinations,
    create
}

function newDestination(req, res) {
    Destination.find({}, (err, destinations) => {
        res.render('destinations/new', {title: 'Add destination', destinations})
    })
}


// function newDestination(req, res) {
//   Destination.find({})
//   .then((destinations) => {
//     res.render('destinations/new', {title: 'Add destination', destinations})
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// }

function addToDestinations(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.cast.push(req.body.destinationId)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }


  function create(req, res) {
    Destination.create(req.body, function(err, destination) {
      res.redirect('/destinations/new')
    })
  }
