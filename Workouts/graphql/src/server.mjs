// src/server.js
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});
