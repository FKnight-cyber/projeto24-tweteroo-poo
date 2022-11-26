import db from '../database/mongodb.js';

async function insert(username, avatar) {
    await db.collection('users').insertOne({username:username, avatar:avatar});
};

async function findUser(username) {
    return await db.collection('users').findOne({username});
};

const authRepository = {
    insert,
    findUser
};

export default authRepository;