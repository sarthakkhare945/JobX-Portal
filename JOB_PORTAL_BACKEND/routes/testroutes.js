import express from 'express'
import testControllers from '../controllers/testControllers.js';
// import recruiterAuth from '../middlewares/authMiddleware.js';

const router = express.Router()


router.post('/test-post',testControllers)


export default router;
