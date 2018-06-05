const router = require('express').Router();
const Locations = require('./../controllers/locations');

router.get('/fetchlocations/:address', (req, res) => {
    Locations.findLocation(req, res);
})

router.post('/savelocations', (req, res) => {
    Locations.saveLocation(req, res);
})

module.exports = router;