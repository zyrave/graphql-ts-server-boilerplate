import { request } from 'graphql-request';
import { getConnection } from 'typeorm';

import { User } from '../../entity/User';
import { startServer } from '../../../src/startServer';

interface AddressInfo {
  address: string;
  family: string;
  port: number;
}

let getHost = () => '';

beforeAll(async () => {
  const app = await startServer();
  const { port } = app.address() as AddressInfo;
  getHost = () => `http://127.0.0.1:${port}`;
});

const email = 'tom@tom.com';
const password = 'jaasdfad';

const mutation = `
  mutation {
    register(email: "${email}", password: "${password}")
  }
`;

test('Register user', async () => {
  const response = await request(getHost(), mutation);
  expect(response).toEqual({ register: true });
  const users = await User.find({ where: { email } });
  expect(users).toHaveLength(1);
  const user = users[0];
  expect(user.email).toEqual(email);
  expect(user.password).not.toEqual(password);
});

afterAll(async () => {
  await getConnection().close();
});