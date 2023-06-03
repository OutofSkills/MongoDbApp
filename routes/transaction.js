import express from 'express';
import { Transaction } from '../models/schema.js';

const router = express.Router();

export default router;

// Post Method
router.post('/', async (request, response) => {
    const data = new Transaction({...request.body});

    try {
        const dataToSave = await data.save();
        response.status(200).json(dataToSave);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

// Get all Method
router.get('/', async (request, response) => {
    try {
        const data = await Transaction.find();
        response.json(data);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get by ID Method
router.get('/:id', async (request, response) => {
    try {
        const data = await Transaction.findById(request.params.id);
        response.json(data);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Update by ID Method
router.patch('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const updatedData = request.body;
        const options = { new: true };

        const result = await Transaction.findByIdAndUpdate(id, updatedData, options);

        response.send(result);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

// Delete by ID Method
router.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const data = await Transaction.findByIdAndDelete(id);
        response.send(`Document with ${data.name} has been deleted..`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});
