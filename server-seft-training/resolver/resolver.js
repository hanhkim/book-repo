const { books, authors } = require('../data/static');

const resolver = {
  // Query
  Query: {
    books: () => books,
    book: (parent, args) =>
      books.find((book) => book.id.toString() === args.id),
    authors: () => authors,
    author: () => authors.find((book) => book.id.toString() === args.id),
  },

  Book: {
    author: (parent, args) =>
      authors.find((author) => author.id === parent.authorId),
  },

  Author: {
    books: (parent, args) =>
      books.filter((book) => book.authorId === parent.id),
  },

  // Mutation
  Mutation: {
    createAuthor: (parent, args) => {
      authors.push(args);
      return args;
    },
    createBook: (parent, args) => {
      books.push(args);
      return args;
    },
  },
};

module.exports = resolver;
