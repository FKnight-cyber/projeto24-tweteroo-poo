import { Router } from 'express';
import { tweet, getUserTweets, getAllTweets } from '../controllers/tweetController.js';

const tweetRouter = Router();

tweetRouter.post('/tweets', tweet);
  
tweetRouter.get('/tweets/:username', getUserTweets);
  
tweetRouter.get('/tweets', getAllTweets);
    

export default tweetRouter;