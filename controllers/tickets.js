// const Flight = require('../models/flight');

// module.exports = {
//     create
// }

// function create(req, res) {
//     Flight.findById(req.params.id, (err, flight) => {
//         flight.tickets.push(req.body)
//         flight.save((err) => {
//             res.redirect(`/flights/${flights._id}`);
//         });
//     });
// };

const Flight = require('../models/flight')
module.exports = {
    create
}
function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        flight.tickets.push(req.body)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}
