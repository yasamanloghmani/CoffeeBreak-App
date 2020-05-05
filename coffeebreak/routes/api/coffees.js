var express = require('express');
var router = express.Router();
const userCtrl = require('../../controllers/users');

router.get('/:id', userCtrl.allCoffees);
router.use(require('../../config/auth'));
router.post('/:id',  userCtrl.createCoffee);




// function checkAuth(req, res, next) {
//     if (req.user) return next();
//     return res.status(401).json({msg: 'Not Authorized'});
//   }
module.exports = router;