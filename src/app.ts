import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import howoldRoutes from './routes/howoldRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(howoldRoutes);

app.get('/', (req: Request, res: Response) => res.send('TalentQL Assessment.'));


app.listen(process.env.PORT || 4500, () => console.log(`Server running on ${process.env.PORT}`))