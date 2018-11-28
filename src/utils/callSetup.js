require('ts-node/register');

// If you want to reference other typescript modules, do it via require:
const { setup } = require('./setupTest');

module.exports = async function() {
  // Call your initialization methods here
  await setup();
  return null;
}
