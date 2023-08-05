const mongoose = require("mongoose");

const setApi = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  publishedDate: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
});

const Books = new mongoose.model("BooksDirectory", setApi);
module.exports = Books;
