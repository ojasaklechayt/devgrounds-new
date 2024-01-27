const { Schema, model, models } = require('mongoose');

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    bio: { type: String },
    picture: { type: String, required: true },
    location: { type: String },
    portfolioWebsite: { type: String },
    reputation: { type: Number, default: 0 },
    saved: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    onboarded: { type: Boolean, default: false },
    joinedAt: { type: Date, default: Date.now },
});

const User = models.User || model('User', UserSchema);

module.exports = User;
