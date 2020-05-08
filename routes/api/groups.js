var express = require('express');
var router = express.Router();
const groupctrl = require('../../controllers/groups');
const userCtrl = require('../../controllers/users');

router.get('/', groupctrl.index);
router.post('/', groupctrl.create);
router.get('/:id', groupctrl.show);
router.put('/:id', groupctrl.update);
router.delete('/:id', groupctrl.deleteOne);
router.post('/:id/posts', groupctrl.createPost)
router.put('/:id/posts/:postId', groupctrl.updatePost)
router.delete('/:id/posts/:postId', groupctrl.deletePost)
router.get('/:id/posts', groupctrl.allPosts);
router.get('/:id/posts/:postId', groupctrl.showPost)


router.use(require('../../config/auth'));
router.put('/:groupId/join', userCtrl.joinGroup);


module.exports = router;
