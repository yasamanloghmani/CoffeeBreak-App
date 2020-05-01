var express = require('express');
var router = express.Router();
const groupctrl = require('../controllers/groups');

router.get('/groups', groupctrl.index);
router.post('/groups', groupctrl.create);
router.get('/groups/:id', groupctrl.show);
router.put('/groups/:id', groupctrl.update);
router.delete('/groups/:id', groupctrl.deleteOne);
router.post('/groups/:id/posts', groupctrl.createPost)
router.put('/groups/:id/posts/:postId', groupctrl.updatePost)
router.delete('/groups/:id/posts/:postId', groupctrl.deletePost)
router.get('/groups/:id/posts', groupctrl.allPosts);
router.get('/groups/:id/posts/:postId', groupctrl.showPost)

module.exports = router;
