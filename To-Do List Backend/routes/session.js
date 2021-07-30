const express = require('express');
const asyncHandler = require('express-async-handler');
const sodiumGenKeypair = require('../util/sodiumGenKeypair');
const sodiumDecrypt = require('../util/sodiumDecrypt');
const config = require('../config');
const axios = require('axios');

const DemoUser = require('../models/demoUser');

const router = new express.Router();

router.post('/users/session-without-encryption', asyncHandler(async (req, res) => {
  try {
    const { sessionKey, sessionId } = req.body;
    if (!sessionId) return res.status(400).send({ message: 'SessionId is required' });
    if (!sessionKey) return res.status(400).send({ message: 'SessionKey is required' });

    const apiKey = config.HARDCODE_SERVICE_KEY;

    const body = {
      sessionId, sessionKey, apiKey
    };
    const response = await axios.post(config.VERIFY_URL, body);
    if (response.status !== 200) return res.status(400).send({ message: "Not allowed by Keyri" });
    const {
      username, userId
    } = response.data; //without crypto key - response just username and id

    if (!userId) return res.status(400).send({ message: 'Invalid session', keyriUserId: userId });
    let resStatus = 200;
    let demoUser = await DemoUser.findOne({ userId });

    if (!demoUser) {
      if (username) {
        resStatus = 201;
        demoUser = new DemoUser({ userId: userid, name: username });
      } else {
        return res.status(404).send({ message: 'User not Found', keyriUserId: userId })
      }
    }

    const refreshToken = await demoUser.generateRefreshToken();

    if (!demoUser.refreshTokens) {
      demoUser.refreshTokens = [];
    };
    demoUser.refreshTokens.push(refreshToken);
    await demoUser.save();

    const token = await demoUser.generateToken();
    const results = await demoUser.publicFields();

    res.status(resStatus).send({ user: results, token, refreshToken, keyriUserId: userId });
  } catch (e) {
    throw e;
  }
}));

router.post('/users/session-with-encryption', asyncHandler(async (req, res) => {
  try {
    const { sessionKey, sessionId } = req.body;
    if (!sessionId) return res.status(400).send({ message: 'SessionId is required' });
    if (!sessionKey) return res.status(400).send({ message: 'SessionKey is required' });

    const receiver = await sodiumGenKeypair();
    const base64pk = Buffer.from(receiver.publicKey).toString('base64');
    const apiKey = config.HARDCODE_SERVICE_KEY;

    const body = {
      sessionId, sessionKey, publicKey: base64pk, apiKey
    };
    const response = await axios.post(config.VERIFY_URL, body);
    if (response.status !== 200) return res.status(400).send({ message: "Not allowed by Keyri" });
    const {
      cipher, nonce, publicKey, username
    } = response.data; //with crypto key
    const userId = await sodiumDecrypt(cipher, nonce, publicKey, receiver.privateKey);
    if (!userId) return res.status(400).send({ message: 'Invalid session', keyriUserId: userId });
    let resStatus = 200;
    let demoUser = await DemoUser.findOne({ userId });

    if (!demoUser) {
      if (username) {
        resStatus = 201;
        demoUser = new DemoUser({ userId, name: username });
      } else {
        return res.status(404).send({ message: 'User not Found', keyriUserId: userId })
      }
    }

    const refreshToken = await demoUser.generateRefreshToken();

    if (!demoUser.refreshTokens) {
      demoUser.refreshTokens = [];
    };
    demoUser.refreshTokens.push(refreshToken);
    await demoUser.save();

    const token = await demoUser.generateToken();
    const results = await demoUser.publicFields();

    res.status(resStatus).send({ user: results, token, refreshToken, keyriUserId: userId });
  } catch (e) {
    throw e;
  }
}));

router.post('/users/session-mobile', asyncHandler(async (req, res) => {
  try {
    const { username, userId } = req.body;
    if (!username) return res.status(400).send({ message: 'User name is required' });
    if (!userId) return res.status(400).send({ message: 'User id is required' });

    let resStatus = 200;
    let demoUser = await DemoUser.findOne({ userId });

    if (!demoUser) {
      if (username) {
        resStatus = 201;
        demoUser = new DemoUser({ userId, name: username });
      } else {
        return res.status(404).send({ message: 'User not Found', keyriUserId: userId })
      }
    }

    const refreshToken = await demoUser.generateRefreshToken();

    if (!demoUser.refreshTokens) {
      demoUser.refreshTokens = [];
    };
    demoUser.refreshTokens.push(refreshToken);
    await demoUser.save();

    const token = await demoUser.generateToken();
    const results = await demoUser.publicFields();

    res.status(resStatus).send({ user: results, token, refreshToken, keyriUserId: userId });
  } catch (e) {
    throw e
  }
}));

module.exports = router;