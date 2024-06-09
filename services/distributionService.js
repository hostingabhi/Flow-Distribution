import Astrologer from '../models/astrologer.js';
import User from '../models/user.js';

export async function distributeUserToAstrologer(userName) {
    const astrologers = await Astrologer.find();
    const topAstrologers = astrologers.filter(ast => ast.isTopAstrologer);
    const regularAstrologers = astrologers.filter(ast => !ast.isTopAstrologer);
    
    let selectedAstrologer;
    if (topAstrologers.length > 0) {
        // Distribute more users to top astrologers
        selectedAstrologer = topAstrologers.reduce((prev, curr) => prev.connections < curr.connections ? prev : curr);
    } else {
        // Distribute equally among all astrologers
        selectedAstrologer = regularAstrologers.reduce((prev, curr) => prev.connections < curr.connections ? prev : curr);
    }

    if (selectedAstrologer) {
        selectedAstrologer.connections += 1;
        await selectedAstrologer.save();
    }

    const user = new User({ name: userName, connectedAstrologer: selectedAstrologer._id });
    await user.save();
    return user;
}
