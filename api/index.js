import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
 
mongoose.connect(process.env.MONGO_URI).then(
    () => {
        console.log('MongoDB Connected Succesfully');
    },
).catch((err) => {
    console.log('MongoDB Connection Failed');
    console.error(err);
});



app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});