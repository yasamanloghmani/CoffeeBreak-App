var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');



router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);



router.get('/:id/groups', userCtrl.userGroups);
// Should change all user routes to /signup /login /update and change controllers functions
router.get('/', userCtrl.index);
router.get('/:id', userCtrl.show);
router.put('/update', userCtrl.updateUser);
router.delete('/delete', userCtrl.deleteUser);
// router.put('/:id', userCtrl.update);
// router.delete('/delete', userCtrl.deleteOne);



// Should change all the routs of coffees and joingroup



// New routes for signup and signin


module.exports = router;