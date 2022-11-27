import db from '../database/mongodb.js';

async function insert(user) {
    await db.collection('users').insertOne(user);
};

async function findUser(username) {
    return await db.collection('users').findOne({username});
};

const authRepository = {
    insert,
    findUser
};

export default authRepository;