import tweetServices from "../services/tweetService.js";

export async function tweet(req, res) {
    const { tweet, username } = req.body;

    const invalidTweet = await tweetServices.validate(username, tweet);
  
    if (invalidTweet) {
        return res.status(400).send('Todos os campos são obrigatórios!');
    }
  
    await tweetServices.insert(username, tweet);
  
    res.status(201).send('OK, seu tweet foi criado');
};

export async function getUserTweets(req, res) {
    const { username } = req.params;
  
    const userTweets = await tweetServices.listUserTweets(username);
  
    res.status(200).send(userTweets);
};

export async function getAllTweets(req, res) {
    const { page } = req.query;

    const checkPage = await tweetServices.validatePage(page);
  
    if (checkPage) {
        return res.status(400).send('Informe uma página válida!');
    }

    const tweets = await tweetServices.listTweets(page);
  
    res.status(200).send(tweets);
};
  
  
