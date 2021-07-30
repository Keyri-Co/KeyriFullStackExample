const express = require('express');
const cors = require('cors');
const sessionRouter = require('./routes/session');
const todoRouter = require('./routes/todo');
const mongooseInit = require('./util/db');
require('dotenv').config();

const config = require('./config');

const app = express();
const PORT = process.env.PORT;

app.use(cors({
  orgin: config.SET_HEADER_URL,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['X-Requested-With', 'Authorization', 'content-type']
})
);
app.use(express.json({
  limit: '16mb'
}));

app.use(express.urlencoded({
  limit: '16mb',
  extended: true
}));

mongooseInit();

app.get('/', (req, res) => {
  res.send({ message: "OK" })
});

app.use(sessionRouter);
app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`The server started on port: ${PORT}`);
});