const _sodium = require('libsodium-wrappers');

const sodiumGenKeypair = async () => {
  await _sodium.ready;
  const sodium = _sodium;
  // Generate keys
  let receiver = sodium.crypto_box_keypair();
  return receiver;
};

module.exports = sodiumGenKeypair;