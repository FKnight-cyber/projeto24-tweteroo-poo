import { MongoClient } from 'mongodb';

let db = null;
const mongoClient = new MongoClient('mongodb://localhost:27017');

try {
    await mongoClient.connect();
    db = mongoClient.db('tweeteroo');
    console.log("Database online")
} catch (error) {
    console.log("It was not possible to connect with the database!",error);
}

export default db;
