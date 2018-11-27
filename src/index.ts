/* tslint:disable:object-shorthand-properties-first */
import 'reflect-metadata';
import { GraphQLServer } from 'graphql-yoga';

import { resolvers } from './resolvers';
import { createTypeormConn } from './utils/createTypeormConn';

export const startServer = async () => {
  const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
  });

  await createTypeormConn();
  await server.start();
  console.log(`Server is running on localhost:4000`);
};

startServer();
