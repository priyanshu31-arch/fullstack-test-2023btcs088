import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import registrationRoutes from './routes/registrationRoutes.js';


dotenv.config();


connectDB();

const app = express();


app.use(cors()); 
app.use(express.json()); 


app.get('/', (req, res) => {
    res.send('University Connect API is running...');
});

app.use('/api/register', registrationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

