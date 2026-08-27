const express = require('express');
const controller = require('../controllers/user.controller');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/users', requireAuth, controller.getUsers);
router.get('/users/:id', requireAuth, controller.getUser);
router.post('/users', controller.postUser);
router.post('/users/:id/credits', requireAuth, controller.postCredits);

module.exports = router;
