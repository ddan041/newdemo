const { createUser } = require('../src/services/user.service');

describe('createUser', () => {
  it('rejects a duplicate email', async () => {
    await expect(createUser({ email: 'taken@example.com' })).rejects.toThrow('Email already taken');
  });
});
