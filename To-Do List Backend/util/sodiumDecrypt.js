const _sodium = require('libsodium-wrappers');

const sodiumDecrypt = async (cipherMsg, nonce, senderPublicKey, receiverPrivateKey) => {
  const Cipher = Buffer.from(cipherMsg, 'base64');
  const Nonce = Buffer.from(nonce, 'base64');
  const publicKey = Buffer.from(senderPublicKey, 'base64');
  await _sodium.ready;
  const sodium = _sodium;
  // Decrypt
  let plainBuffer = sodium.crypto_box_open_easy(Cipher, Nonce, publicKey, receiverPrivateKey);
  plainBuffer = sodium.to_string(plainBuffer);
  return plainBuffer;
};

module.exports = sodiumDecrypt;