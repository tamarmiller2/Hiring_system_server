import express, { Request, Response } from 'express';
import { createCandidate, updateCandidate, getCandidates, getCandidateById, deleteCandidate } from '../controllers/candidatesController';
const candidatesRouter = express.Router();

// Retrieve all candidates
candidatesRouter.get('/', getCandidates);

// Retrieve a candidate by ID
candidatesRouter.get('/:id', getCandidateById);

// Create a new candidate
candidatesRouter.post('/', createCandidate);

// Update a candidate
candidatesRouter.put('/:id', updateCandidate);

// Delete a candidate
candidatesRouter.delete('/:id', deleteCandidate);

export default candidatesRouter;
