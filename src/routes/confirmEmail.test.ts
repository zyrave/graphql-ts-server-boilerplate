import fetch from 'node-fetch';

test('Sends invalid back if bad Id sent', async () => {
  const response = await fetch(`${process.env.TEST_HOST}/confirm/12312`);
  const text = await response.text();
  expect(text).toEqual('INVALID');
});
