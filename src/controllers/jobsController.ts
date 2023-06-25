
import { Request, Response } from 'express';
import Job from '../models/Job';

export const createJob = async (req: Request, res: Response) => {
  try {
    const { name, status, date, jobLocation, companyDescription, jobDescription, requirements, companyLogo } = req.body;
    const job = new Job({
      name,
      status,
      date,
      jobLocation,
      companyDescription,
      jobDescription,
      requirements,
      companyLogo,
    });
    const savedJob = await job.save();
    
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create job', error });
  }
};


// עדכון משרה קיימת
export const updateJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      status,
      date,
      jobLocation,
      companyDescription,
      jobDescription,
      requirements,
      companyLogo,
    } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { name, status, date, jobLocation, companyDescription, jobDescription, requirements, companyLogo },
      { new: true }
    );
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update job', error });
  }
};


// הצגת כל המשרות
export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get jobs', error });
  }
};

// הצגת משרה לפי ID
export const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get job', error });
  }
};


// מחיקת משרה לפי ID
export const deleteJob = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedJob = await Job.findByIdAndDelete(id);
      if (!deletedJob) {
        return res.status(404).json({ message: 'Job not found' });
      }
      res.json({ message: 'Job deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete job', error });
    }
  };
  