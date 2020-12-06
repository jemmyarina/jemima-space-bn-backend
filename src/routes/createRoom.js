const { Router } = require('express');

const router = Router();

const controller = require('../controllers/room');
const control = controller.createRoom;
router.post('/createRoom', control);

module.exports = router;