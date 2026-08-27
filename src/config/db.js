const mongoose = require('mongoose');

/** Connects to MongoDB using the URI from the environment. */
async function connectDatabase(uri = process.env.MONGODB_URI) {
  if (!uri) throw new Error('MONGODB_URI is required');
  await mongoose.connect(uri);
  return mongoose.connection;
}

module.exports = { connectDatabase };
