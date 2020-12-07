const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    delete: deleteFlight
}

 function newFlight(req, res) {
     res.render('flights/new', {title: 'Add new flight', err: ''});
 };

 function create(req, res) {
     console.log('create')
     console.log(req.body, 'req.body')
    const flight = new Flight(req.body)
    flight.save(function(err, flight) {
        res.redirect('/flights') //, {title: 'New flight', flight})
    })
    // flight.save((err) => {
    //     if (err) {
    //         console.log(err);
    //         return res.render('flights/new', {err});
    //     }
    //     console.log(flight);
    //     res.redirect(`/flights/${flights._id}`);
    // });
 };


 function index(req, res) {
     Flight.find({}, function(err, flights) {
         res.render('flights/index', {title: "All flights", flights: flights})
     })
 }

 function deleteFlight(req, res) {
     console.log('delete', deleteFlight)
     Flight.findByIdAndDelete(req.params.id, (err, flight) => {
         res.redirect('/flights')
     })
 }
