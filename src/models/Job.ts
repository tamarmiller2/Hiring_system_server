import mongoose, { Schema, Document } from 'mongoose';

interface IJob extends Document {
  name: string;
  status: string;
  date: Date;
  jobLocation?: string;
  companyDescription?: string;
  jobDescription?: string;
  requirements: string;
  companyLogo?: string;
}

const jobSchema = new Schema<IJob>({
  name: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
  jobLocation: { type: String },
  companyDescription: { type: String },
  jobDescription: { type: String },
  requirements: { type: String, required: true },
  companyLogo: { type: String }, // Assuming you store the image URL as a string
});

const Job = mongoose.model<IJob>('Job', jobSchema);

export default Job;

