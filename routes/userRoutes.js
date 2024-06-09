import express from 'express';
import { distributeUserHandler } from '../controllers/userController.js';

const router = express.Router();

router.post('/distribute', distributeUserHandler);

export default router;
