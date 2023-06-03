import express from 'express';
import { PropertyFeature } from '../models/schema.js';

const router = express.Router();

export default router;

// Post Method
router.post('/', async (request, response) => {
    const data = new PropertyFeature({...request.body});

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
        const data = await PropertyFeature.find();
        response.json(data);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get by ID Method
router.get('/:id', async (request, response) => {
    try {
        const data = await PropertyFeature.findById(request.params.id);
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

        const result = await PropertyFeature.findByIdAndUpdate(id, updatedData, options);

        response.send(result);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});

// Delete by ID Method
router.delete('/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const data = await PropertyFeature.findByIdAndDelete(id);
        response.send(`Document with ${data.name} has been deleted..`);
    } catch (error) {
        response.status(400).json({ message: error.message });
    }
});
