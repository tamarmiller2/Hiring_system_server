// import mongoose, { Connection } from 'mongoose';
// const uri = 'mongodb+srv://tamarm:Tm055678@DatabaseDeployments.5tqhzb1.mongodb.net/Hiring_system_db?retryWrites=true&w=majority';
// const connectDB = async (): Promise<Connection> => {
//   const connection = await mongoose.connect(uri);
//   return connection.connection;
// };
// const database = mongoose.connection;
// database.on('error', (error) => {
//   console.log(error);
// });
// database.once('connected', () => {
//   console.log('Database Connected');
// });
// export default connectDB;

//+++++++++++++++++++++++++++++++++++++++++++++++++
import mongoose, { Connection } from 'mongoose';

// const uri = 'mongodb+srv://aaa:cccc@DatabaseDeployments.5tqhzb1.mongodb.net/Hiring_system_db?retryWrites=true&w=majority';
const uri = 'mongodb+srv://tamarm:Tm055678@DatabaseDeployments.5tqhzb1.mongodb.net/Hiring_system_db?retryWrites=true&w=majority';

const connectDB = async (): Promise<Connection> => {
  const connection = await mongoose.connect(uri);
  return connection.connection;
};

const database = mongoose.connection;
database.on('error', (error) => {
  console.log('Failed to connect to the database:', error);
});
database.once('connected', () => {
  console.log('Database connected');
});

export default connectDB;

