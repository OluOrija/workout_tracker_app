// src/server.js
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema.mjs';
import dotenv from 'dotenv';
import cors from 'cors';
// import https from 'https';
// import fs from 'fs';


dotenv.config();

const app = express();

app.use(cors()); // Enable CORS

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;
// const SSL_PORT = process.env.SSL_PORT || 4443;


// const options = {
//   key: fs.readFileSync('./server.key'),
//   cert: fs.readFileSync('./server.cert'),
// };

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});

// https.createServer(options, app).listen(SSL_PORT, () => {
//   console.log(`Server is running on https://localhost:${SSL_PORT}/graphql`);
// });