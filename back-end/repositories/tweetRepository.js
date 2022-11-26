import db from '../database/mongodb.js';

async function insert(username, tweet, avatar) {
    await db.collection('tweets').insertOne({username:username, tweet:tweet, avatar:avatar});
};

async function tweetsByUser(username) {
    return await db.collection('tweets').find({username}).toArray();
};

async function allTweets() {
    return await db.collection('tweets').find().toArray();
}

const tweetsRepository = {
    insert,
    tweetsByUser,
    allTweets
};

export default tweetsRepository;