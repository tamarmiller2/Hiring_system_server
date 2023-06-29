import { Request, Response } from 'express';
import Candidate from '../models/candidate';


export const createCandidate = async (req: Request, res: Response) => {
  try {
    const {
      candidateName,
      candidateEmail,
      totalRating,
      cognitiveScore,
      personalityFit,
      ceeningCall,
      interview,
      task,
      jobOffer,
      hired,
    } = req.body;

    const candidate = new Candidate({
      candidateName,
      candidateEmail,
      totalRating,
      cognitiveScore,
      personalityFit,
      ceeningCall,
      interview,
      task,
      jobOffer,
      hired,
    });

    const savedCandidate = await candidate.save();
    console.log("candident added succesfully ")
    res.status(201).json(savedCandidate);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create candidate', error });
  }
};

export const updateCandidate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      candidateName,
      candidateEmail,
      totalRating,
      cognitiveScore,
      personalityFit,
      ceeningCall,
      interview,
      task,
      jobOffer,
      hired,
    } = req.body;

    const updatedCandidate = await Candidate.findByIdAndUpdate(
      id,
      {
        candidateName,
        candidateEmail,
        totalRating,
        cognitiveScore,
        personalityFit,
        ceeningCall,
        interview,
        task,
        jobOffer,
        hired,
      },
      { new: true }
    );

    if (!updatedCandidate) {
      res.status(404).json({ message: 'Candidate not found' });
      return;
    }

    res.json(updatedCandidate);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update candidate', error });
  }
};

export const getCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get candidates', error });
  }
};

export const getCandidateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      res.status(404).json({ message: 'Candidate not found' });
      return;
    }
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get candidate', error });
  }
};

export const deleteCandidate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCandidate = await Candidate.findByIdAndDelete(id);
    if (!deletedCandidate) {
      res.status(404).json({ message: 'Candidate not found' });
      return;
    }
    res.json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete candidate', error });
  }
};
