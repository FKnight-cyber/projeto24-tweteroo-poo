import db from '../database/mongodb.js';

async function insert(user, tweet) {
    await db.collection('tweets').insertOne(user.tweet(tweet));
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