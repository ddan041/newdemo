const { User } = require('../models/user.model');

/** Creates a user after checking the email is free. */
async function createUser(payload) {
  if (await User.isEmailTaken(payload.email)) {
    throw new Error('Email already taken');
  }
  return User.create(payload);
}

async function getUserById(id) {
  return User.findById(id);
}

async function listUsers(filter = {}) {
  return User.find(filter).limit(50);
}

/** Adds credits to a user's balance. */
async function addCredits(id, amount) {
  const user = await getUserById(id);
  if (!user) throw new Error('User not found');
  user.credits += amount;
  await user.save();
  return user;
}

module.exports = { createUser, getUserById, listUsers, addCredits };
