import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import astrologerRoutes from './routes/astrologerRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { MONGODB_URI, PORT } from './config.js';

const app = express();

app.use(bodyParser.json());

app.use('/astrologers', astrologerRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Flow Distribution');
  });

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
