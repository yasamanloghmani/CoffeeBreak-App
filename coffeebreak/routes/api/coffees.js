var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');

router.post('/:id', userCtrl.createCoffee);
router.get('/:id', userCtrl.allCoffees);

module.exports = router;