var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');



router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);



router.get('/:id/groups', userCtrl.userGroups);
router.get('/', userCtrl.index);
router.get('/:id', userCtrl.show);
router.put('/update', userCtrl.updateUser);
router.delete('/delete', userCtrl.deleteUser);
// router.put('/:id', userCtrl.update);
// router.delete('/delete', userCtrl.deleteOne);


module.exports = router;