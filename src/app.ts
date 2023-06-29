// // // // Import any required modules or libraries here

// import connectDB from "./connectDb";
// import express from 'express';
// import bodyParser from 'body-parser';
// import jobRouter from './routes/jobsRouter';

// const app = express();


// // Middleware
// app.use(bodyParser.json());
// connectDB()
// // Routes
// app.use('/jobs', jobRouter);
// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// ++++++++++++++++++++++++
// עובד בלי העלאת תמונה
//TODO

// import express from 'express';
// import bodyParser from 'body-parser';
// import jobRouter from './routes/jobsRouter';
// import connectDB from './connectDb';
// import candidatesRouter from './routes/candidatesRouter';
// import multer from 'multer'
// const cors = require('cors');

// const app = express();
// app.use(cors());

// // Middleware
// app.use(bodyParser.json());

// // Connect to the database
// connectDB().then(() => {
//   // Routes
//   app.use('/jobs', jobRouter);

// app.use('/candidates', candidatesRouter);
//   // Start the server
//   const port = process.env.PORT || 3000;
//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });
// }).catch((error) => {
//   console.error('Failed to connect to the database:', error);
// });
//++++++++++++++++++++++++++++++++++++++
//ניסוי להעלאת תמונה
import express from 'express';
import bodyParser from 'body-parser';
import jobRouter from './routes/jobsRouter';
import connectDB from './connectDb';
import candidatesRouter from './routes/candidatesRouter';
import multer from 'multer'
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware
app.use(bodyParser.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix); // Generate a unique filename for the uploaded file
  },
});

const upload = multer({ storage });

// Connect to the database
connectDB().then(() => {
  // Routes
  app.use('/jobs', jobRouter);

app.use('/candidates', candidatesRouter);
  // Start the server
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});




