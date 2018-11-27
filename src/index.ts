/* tslint:disable:object-shorthand-properties-first */
import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';
import { createConnection } from 'typeorm';

import { resolvers } from './resolvers';

export const startServer = async () => {
  const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
  });

  await createConnection();
  await server.start();
  console.log(`Server is running on localhost:4000`);
};

startServer();
