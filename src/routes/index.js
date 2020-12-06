const { Router } = require('express');

const router = Router();

const controller = require('../controllers/room');
const control = controller.createRoom;

router.post('/createRoom', control);
router.get('/', (req, res) => {
    res.json({ status: 'success', message: 'Welcome to my server' });
  });

module.exports = router;