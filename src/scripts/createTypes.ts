import fs from 'fs';
import path from 'path';
import { generateNamespace } from '@gql2ts/from-schema';

import { genSchema } from './../utils/genSchema';

const typescriptTypes = generateNamespace('GQL', genSchema() as any).replace(
  /declare namespace GQL/gi,
  'export namespace GQL'
);

fs.writeFile(
  path.join(__dirname, '../types/schema.d.ts'),
  typescriptTypes,
  err => {
    console.log(err);
  }
);
