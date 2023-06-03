import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import property from './routes/property.js';
import agent from './routes/agent.js';
import client from './routes/client.js';
import transaction from './routes/transaction.js';
import propertyImage from './routes/property-image.js';
import propertyReview from './routes/property-review.js';
import propertyFeature from './routes/property-feature.js';

/* Mongodb connection */
const mongoString = process.env.DB_CONNECTION;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

/* Express middleware */
const app = express();

app.use(express.json());
app.use('/api/property', property);
app.use('/api/agent', agent);
app.use('/api/client', client);
app.use('/api/transaction', transaction);
app.use('/api/property-image', propertyImage);
app.use('/api/property-review', propertyReview);
app.use('/api/property-feature', propertyFeature);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
});
