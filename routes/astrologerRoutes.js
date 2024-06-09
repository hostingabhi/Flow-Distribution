import express from 'express';
import { createAstrologerHandler, toggleTopAstrologerHandler } from '../controllers/astrologerController.js';

const router = express.Router();

router.post('/', createAstrologerHandler);
router.patch('/:id/toggle-top', toggleTopAstrologerHandler);

export default router;
