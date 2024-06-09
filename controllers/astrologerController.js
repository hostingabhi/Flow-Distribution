import { createAstrologer, toggleTopAstrologer } from '../services/astrologerService.js';

export async function createAstrologerHandler(req, res) {
    const { name, isTopAstrologer } = req.body;
    const astrologer = await createAstrologer(name, isTopAstrologer);
    res.status(201).json(astrologer);
}

export async function toggleTopAstrologerHandler(req, res) {
    const { id } = req.params;
    const astrologer = await toggleTopAstrologer(id);
    res.status(200).json(astrologer);
}
