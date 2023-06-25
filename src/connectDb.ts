import mongoose, { Connection } from 'mongoose';
const uri = 'mongodb+srv://tamarm:Tm055678@hiringsystem.5tqhzb1.mongodb.net/Hiring_system_db?retryWrites=true&w=majority';
const connectDB = async (): Promise<Connection> => {
  const connection = await mongoose.connect(uri);
  return connection.connection;
};
const database = mongoose.connection;
database.on('error', (error) => {
  console.log(error);
});
database.once('connected', () => {
  console.log('Database Connected');
});
export default connectDB;