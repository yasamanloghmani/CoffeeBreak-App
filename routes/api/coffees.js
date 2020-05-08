var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');

router.get('/:id', userCtrl.allCoffees);
router.use(require('../../config/auth'));
router.post('/:id',  userCtrl.createCoffee);

module.exports = router;