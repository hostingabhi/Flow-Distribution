import mongoose from 'mongoose';

const astrologerSchema = new mongoose.Schema({
    name: String,
    connections: { type: Number, default: 0 },
    isTopAstrologer: { type: Boolean, default: false }
});

const Astrologer = mongoose.model('Astrologer', astrologerSchema);

export default Astrologer;
