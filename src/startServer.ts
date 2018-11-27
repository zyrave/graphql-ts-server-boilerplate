/* tslint:disable:object-shorthand-properties-first */

import { GraphQLServer } from 'graphql-yoga';

import { resolvers } from './resolvers';
import { createTypeormConn } from './utils/createTypeormConn';

export const startServer = async () => {
  const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
  });

  await createTypeormConn();
  const app = await server.start({
    port: process.env.NODE_ENV == 'test' ? 0 : 4000
  });
  console.log(`Server is running on localhost:4000`);

  return app;
};
