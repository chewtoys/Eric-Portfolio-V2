'use strict';

const C = require('Constants');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let isEmpty = function(property) {
  return property.length;
};

let PostSchema = new Schema({
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 240,
    validate: [isEmpty, 'Please fill in the title']
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 800,
    validate: [isEmpty, 'Please fill in the description']
  },
  image: {
    type: String,
    required: true,
    trim: true,
    validate: [isEmpty, 'Please fill in the image link']
  },
  content: {
    type: String,
    required: true,
    trim: true,
    validate: [isEmpty, 'Please fill in the content']
  },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
  comments: {
    type: [{ body: String, date: Date }],
    default: []
  },
  date: {
    type: Date,
    default: new Date()
  },
  draft: {
    type: Boolean,
    default: true
  }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
