import authRepository from "../repositories/authRepository.js";
import tweetsRepository from "../repositories/tweetRepository.js";

async function validate(username, tweet) {
    if (!username || !tweet) {
        return true;
    }
    
    return false;
};

async function insert(username, tweet) {
    const users = await authRepository.findUser(username);

    const { avatar } = users;

    await tweetsRepository.insert(username, tweet, avatar);
};

async function listUserTweets(username) {
    const tweetsDoUsuario = await tweetsRepository.tweetsByUser(username);

    return tweetsDoUsuario;
};

async function listTweets(page) {
    const limite = 10;
    const start = (page - 1) * limite;
    const end = page * limite;

    const tweets = await tweetsRepository.allTweets();
  
    if (tweets.length <= 10) {
        const reversedTweets = reverseTweets(tweets);
        return reversedTweets;
    }

    const tweetsPage = [...tweets].reverse().slice(start, end);

    return tweetsPage;
}

async function validatePage(page) {
    if (page && page < 1) {
        return true;
    }

    return false;
}

const tweetServices = {
    validate,
    validatePage,
    insert,
    listUserTweets,
    listTweets
};

export default tweetServices;

function reverseTweets(tweets) {
    return [...tweets].reverse();
}