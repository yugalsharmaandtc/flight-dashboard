import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import flightRoutes from './routes/flightRoutes.js';
import airlineRoutes from './routes/airlineRoutes.js';
import airportRoutes from './routes/airportRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> res.send("flight api is running"));

app.use("/api/flights",flightRoutes);
app.use("/api/airlines",airlineRoutes);
app.use("/api/airports",airportRoutes);

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`server running on port ${PORT}`));