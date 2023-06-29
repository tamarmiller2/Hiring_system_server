import mongoose, { Schema, Document } from 'mongoose';

export  interface ICandidate extends Document {
  candidateName: string;
  candidateEmail: string;
  totalRating: number;
  cognitiveScore: number;
  personalityFit: number;
  screeningCall: boolean;
  interview: boolean;
  task: boolean;
  jobOffer: boolean;
  hired: boolean;
}

const candidateSchema: Schema = new Schema({
  candidateName: { type: String, required: true },
  candidateEmail: { type: String, required: true },
  totalRating: { type: Number, required: false },
  cognitiveScore: { type: Number, required: false },
  personalityFit: { type: Number, required: false },
  screeningCall: { type: Boolean, required: false },
  interview: { type: Boolean, required: false },
  task: { type: Boolean, required: false },
  jobOffer: { type: Boolean, required: false },
  hired: { type: Boolean, required: false },
});

const Candidate = mongoose.model<ICandidate>('Candidate', candidateSchema);

export default Candidate;
