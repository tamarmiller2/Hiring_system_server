

// import mongoose, { Schema, Document } from 'mongoose';
// // import { ICandidate } from './Candidate'; // Import the ICandidate interface
// import ICandidate from './candidate'; // Import the ICandidate interface

// interface IJob extends Document {
//   name: string;
//   status: string;
//   date: Date;
//   jobLocation?: string;
//   companyDescription?: string;
//   jobDescription?: string;
//   requirements: string;
//   companyLogo?: string;
//   candidates?: typeof ICandidate[];
// }

// const jobSchema = new Schema<IJob>({
//   name: { type: String, required: true },
//   status: { type: String, required: true },
//   date: { type: Date, required: true },
//   jobLocation: { type: String },
//   companyDescription: { type: String },
//   jobDescription: { type: String },
//   requirements: { type: String, required: true },
//   companyLogo: { type: String }, 
//   candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }]
// });

// const Job = mongoose.model<IJob>('Job', jobSchema);

// export default Job;
//++++++++++++++++++++++++++++++++++++
import mongoose, { Schema, Document } from 'mongoose';
import ICandidate from './candidate';

interface IJob extends Document {
  name: string;
  status: string;
  date: Date;
  jobLocation?: string;
  companyDescription?: string;
  jobDescription?: string;
  requirements: string;
  companyLogo?: {
    data: Buffer;
    contentType: string;
  };
  candidates?: string[];
}

const jobSchema = new Schema<IJob>({
  name: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
  jobLocation: { type: String },
  companyDescription: { type: String },
  jobDescription: { type: String },
  requirements: { type: String, required: true },
  companyLogo: {
    data: Buffer,
    contentType: String,
  },
  // candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Candidate' }],
  candidates: { type: [String], required: false },
});





const Job = mongoose.model<IJob>('Job', jobSchema);

export default Job;
