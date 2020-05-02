var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');

// Should change all user routes to /signup /login /update and change controllers functions
router.get('/', userCtrl.index);
router.get('/:id', userCtrl.show);
router.put('/:id', userCtrl.update);
router.delete('/:id', userCtrl.deleteOne);



// Should change all the routs of coffees and joingroup
router.put('/:groupId/join', userCtrl.joinGroup);
router.post('/:id/coffees', userCtrl.createCoffee);
router.get('/:id/coffees', userCtrl.allCoffees);




// New routes for signup and signin
router.post('/signup', userCtrl.signup);


module.exports = router;