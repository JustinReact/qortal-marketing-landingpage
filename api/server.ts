import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import subscribeRoutes from './routes/subscribeRoutes';
import blurbRoutes from './routes/blurbRoutes'; 
import { handleGetAllBlurbs } from './controllers/blurbController';
import { authenticateWithToken } from './middleware/authMiddleware';

const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_ORIGIN
];

const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: any) => void) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT']
};

const app: Express = express();
const PORT = process.env.PORT || 3010;

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api/subscribe', subscribeRoutes);
app.use('/api/submit-blurb', blurbRoutes)
app.get('/api/get-blurbs', authenticateWithToken, handleGetAllBlurbs);

app.get('/', (req: Request, res: Response) => {
    res.send('API is running! ')
});

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
