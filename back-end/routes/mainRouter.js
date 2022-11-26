import { Router } from 'express';
import authRouter from './authRouter.js';
import tweetRouter from './tweetRouter.js';

const mainRouter = Router();

mainRouter.use(authRouter);
mainRouter.use(tweetRouter);

export default mainRouter;