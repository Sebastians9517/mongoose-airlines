const Flight = require('../models/flight');
const Destination = require('../models/destination');


module.exports = {
    new: newFlight,
    create,
    index,
    delete: deleteFlight,
    show
}

 function newFlight(req, res) {
     res.render('flights/new', {title: 'Add new flight', err: ''});
 };

 function create(req, res) {
     for (let key in req.body) {
         if (req.body[key] === '')
            delete req.body[key]
     }
    const flight = new Flight(req.body)
    flight.save(function(err, flight) {
        res.redirect('/flights')
    })
 };


 function index(req, res) {
     Flight.find({}, function(err, flights) {
         res.render('flights/index', {title: "All flights", flights: flights})
     })
 }

 function deleteFlight(req, res) {
     Flight.findByIdAndDelete(req.params.id, (err, flight) => {
         res.redirect('/flights')
     })
 }

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations').exec((err, flight) => {
      Destination.find({_id: {$nin: flight.destinations}}, (err, destinations) => {
        res.render('flights/show', {title: 'flight Detail', flight, destinations})
      })
    })
  }
