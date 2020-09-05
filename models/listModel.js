const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please add a list'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const List = mongoose.Model('List', listSchema);

module.exports = List;
