import { Router } from 'express';
import { register } from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/sign-up', register);

export default authRouter;