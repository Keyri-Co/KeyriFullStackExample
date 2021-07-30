const mongoose = require('mongoose');
const config = require('../config');

mongoose.connection.on('disconnect', () => {
  const errorMessage = 'MongoDB is disconnected';
  console.log(errorMessage);
});

mongoose.connection.on('reconnected', () => {
  console.log('MongoDB is reconnected');
});

const connectWithRetry = () => {
  const url = config.MONGO_URL;
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 5000
  };

  return mongoose.connect(url, options).then(() => {
    console.log('DB Connected!');
  }).catch(async (err) => {
    await mongoose.disconnect();
    console.log(`DB Connection Error: ${err.message}`);
    setTimeout(connectWithRetry, 5000);
  });
};

module.exports = connectWithRetry;