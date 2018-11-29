import fs from 'fs';
import path from 'path';
import { importSchema } from 'graphql-import';
import { mergeSchemas, makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';

export const genSchema = () => {
  const schemas: GraphQLSchema[] = [];
  const folders = fs.readdirSync(path.join(__dirname, '../modules'));
  folders.forEach(folder => {
    const { resolvers } = require(`../modules/${folder}/resolvers`);
    const typeDefs = importSchema(
      path.join(__dirname, `../modules/${folder}/schema.graphql`)
    );
    schemas.push(makeExecutableSchema({ resolvers, typeDefs }));
  });

  return mergeSchemas({ schemas });
};
