import express from 'express';
import { getTopNews } from '../controllers/newsController.js';

const router = express.Router();

router.get('/', getTopNews);

export default router;

