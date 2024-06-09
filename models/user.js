import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    connectedAstrologer: { type: mongoose.Schema.Types.ObjectId, ref: 'Astrologer' }
});

const User = mongoose.model('User', userSchema);

export default User;
