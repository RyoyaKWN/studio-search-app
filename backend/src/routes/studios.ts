import express from 'express';
import { getStudios } from '../controllers/studiosController.js';

const router = express.Router();
console.log('cha')
router.get('/', getStudios);

export default router;