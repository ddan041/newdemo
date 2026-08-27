const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, default: '' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    credits: { type: Number, default: 0 },
  },
  { timestamps: true },
);

userSchema.statics.isEmailTaken = async function isEmailTaken(email, excludeId) {
  const existing = await this.findOne({ email, _id: { $ne: excludeId } });
  return Boolean(existing);
};

const User = mongoose.model('User', userSchema);

module.exports = { User };
