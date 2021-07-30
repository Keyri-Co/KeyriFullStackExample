const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DemoUser'
  }
},
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('ToDo', todoSchema);