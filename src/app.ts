// // Import any required modules or libraries here

import connectDB from "./connectDb";
import express from 'express';
import bodyParser from 'body-parser';
import jobRouter from './routes/jobsRouter';

const app = express();


// Middleware
app.use(bodyParser.json());
connectDB()
// Routes
app.use('/jobs', jobRouter);
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

  