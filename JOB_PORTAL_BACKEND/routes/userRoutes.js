import express from 'express';
import { getAllParticularRecruitersController, getAllRecruitersController, getUserDetailsController, updateUserController } from '../controllers/UserController.js';
import UserAuth from '../middlewares/authMiddleware.js';
import authenticateUser from '../middlewares/authMiddleware.js';

const router = express.Router();

router.put('/update-user' ,UserAuth,updateUserController);
router.get('/get-myprofile',UserAuth,getUserDetailsController)

router.get('/allrecruiters',UserAuth,getAllRecruitersController)
router.get('/:id',UserAuth,getAllParticularRecruitersController)

export default router;
