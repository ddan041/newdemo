const userService = require('../services/user.service');

async function postUser(req, res) {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
}

async function getUser(req, res) {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Not found' });
  return res.json(user);
}

async function getUsers(req, res) {
  res.json(await userService.listUsers());
}

async function postCredits(req, res) {
  const user = await userService.addCredits(req.params.id, req.body.amount);
  res.json(user);
}

module.exports = { postUser, getUser, getUsers, postCredits };
