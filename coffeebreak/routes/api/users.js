var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');

// Should change all user routes to /signup /login /update and change controllers functions
router.get('/users', userCtrl.index);
router.post('/users', userCtrl.create);
router.get('/users/:id', userCtrl.show);
router.put('/users/:id', userCtrl.update);
router.delete('/users/:id', userCtrl.deleteOne);



// Should change all the routs of coffees and joingroup
router.put('/groups/:groupId/join', userCtrl.joinGroup);
router.post('/users/:id/coffees', userCtrl.createCoffee);
router.get('/users/:id/coffees', userCtrl.allCoffees);


module.exports = router;