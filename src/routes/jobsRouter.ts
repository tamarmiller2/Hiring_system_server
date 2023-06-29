



import express, { Request, Response } from 'express';
import { getJobs, getJobById,createJob, updateJob, deleteJob } from '../controllers/jobsController';
const jobRouter = express.Router();

// Retrieve all jobs
jobRouter.get('/', getJobs);

jobRouter.get('/:id', getJobById);

// Create a new job
jobRouter.post('/', createJob);

// Update a job
jobRouter.put('/:id', updateJob);

// Delete a job
jobRouter.delete('/:id', deleteJob);

export default jobRouter;

