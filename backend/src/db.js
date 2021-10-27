import { MongoClient } from 'mongodb';

let client;

export const initializeDBConnection = async () => {
  client = await MongoClient.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getDBConnection = (dbName) => {
  const db = client.db(dbName);
  return db;
};
