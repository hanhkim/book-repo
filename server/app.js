const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// Load db methods
const mongoDataMethods = require('./data/db');

const urlDB = 'mongodb://127.0.0.1:27017/grapqlTutorial';

// Connect to MongoDB
const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URL, {
    await mongoose.connect(urlDB, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();
app.use(cors());
server.applyMiddleware({ app });

// app.listen({ port: process.env.PORT || 4000 }, () =>
app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
