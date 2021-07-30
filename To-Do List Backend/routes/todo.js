const express = require('express');
const asyncHandler = require('express-async-handler');
const config = require('../config');
const ToDo = require('../models/todo');
const DemoUser = require('../models/demoUser');
const jwt = require('jsonwebtoken');

const router = new express.Router();

//to get all lists of a user
router.get('/demoToDo', asyncHandler(async (req, res) => {
  try {
    const header = req.headers.authorization;
    const bearer = header.split(' ');
    const token = bearer[1]; req.headers;

    if (!token) {
      return res.status(400).send({ message: "Authorization token is required!" });
    };

    const { _id } = jwt.verify(token, config.JWT_SECRET);

    if (!_id) {
      return res.status(400).send({ message: "User id not found" })
    };

    const user = await DemoUser.findOne({ _id });

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    };

    const userTodoLists = await ToDo.aggregate([
      {
        $match: { owner: user._id }
      },
      {
        $project: {
          _id: 1,
          title: 1
        }
      }
    ]);

    res.status(200).json({ userTodoLists })
  } catch (e) {
    throw e;
  }
}));

//to post a new todo
router.post('/demoToDo', asyncHandler(async (req, res) => {
  try {
    const header = req.headers.authorization;
    const bearer = header.split(' ');
    const token = bearer[1]; req.headers;

    if (!token) {
      return res.status(400).send({ message: "Authorization token is required!" });
    };

    const { name } = req.body;

    if (!name) {
      return res.status(400).send({ message: "Name is required!" });
    };

    const { _id } = jwt.verify(token, config.JWT_SECRET);

    if (!_id) {
      return res.status(400).send({ message: "User id not found" })
    };

    const user = await DemoUser.findOne({ _id });

    if (!user) {
      return res.status(404).send({ message: "User not found!" });
    };

    const todoNewObj = {
      title: name,
      owner: user._id
    };

    const newTodo = new ToDo(todoNewObj);

    const result = await newTodo.save();

    if (!result) {
      return res.status(500).send({ message: "Something went wrong!" });
    };

    res.status(201).json({ id: result.id, title: result.title });
  } catch (e) {
    throw e;
  }
}));

module.exports = router;