import Astrologer from '../models/astrologer.js';

export async function createAstrologer(name, isTopAstrologer = false) {
    const astrologer = new Astrologer({ name, isTopAstrologer });
    await astrologer.save();
    return astrologer;
}

export async function toggleTopAstrologer(id) {
    const astrologer = await Astrologer.findById(id);
    if (astrologer) {
        astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
        await astrologer.save();
    }
    return astrologer;
}
