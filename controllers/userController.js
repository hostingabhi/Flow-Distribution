import { distributeUserToAstrologer } from '../services/distributionService.js';

export async function distributeUserHandler(req, res) {
    const { name } = req.body;
    const user = await distributeUserToAstrologer(name);
    res.status(201).json(user);
}
