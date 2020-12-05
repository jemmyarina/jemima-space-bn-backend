import express from 'express';
import Example from '../controllers/hotels'

const router = express.Router();

router.get('/example', Example.example1);

export default router;
