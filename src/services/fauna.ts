import { Client } from 'faunadb';

export const faune = new Client({
  secret: process.env.FAUNADB_KEY,
});
