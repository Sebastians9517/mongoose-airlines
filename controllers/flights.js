const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

 function newFlight(req, res) {
     res.render('flights/new', {title: 'Add new flight', err: ''});
 };

 function create(req, res) {
    const flight = new Flight(req.body)
    flight.save((err) => {
        if (err) {
            console.log(err);
            return res.render('flights/new', {err});
        }
        console.log(flight);
        res.redirect(`/flights/${flights._id}`);
    });
 };

 function index(req, res) {
     Flight.find({}, (err, flights) => {
         res.render('flights/index', {title: "All flights", flights})
     })
 }
