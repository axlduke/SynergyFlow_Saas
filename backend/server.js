import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', );

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})