import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import subscribeRoutes from './routes/subscribeRoutes';
import blurbRoutes from './routes/blurbRoutes'; 
import adminRoutes from './routes/adminRoutes';
import { handleGetAllBlurbs } from './controllers/blurbController';
import { authenticateFirebaseToken, authenticateWithToken } from './middleware/authMiddleware';
import cookieParser from 'cookie-parser';
import path from 'path';

const allowedOrigins = [process.env.FRONTEND_ORIGIN || 'http://localhost:3000']; // Replace with your production frontend URL
const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT'], // no DELETE for now
    // credentials: true, // if you're using cookies or Authorization headers
};


const app: Express = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'views')));

app.use(express.urlencoded({ extended: true })); // for form parsing
app.use(cookieParser()); // sign cookies

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api/admin', adminRoutes);
app.use('/api/subscribe', subscribeRoutes);
app.use('/api/submit-blurb', blurbRoutes)
app.get('/api/get-blurbs', authenticateWithToken, handleGetAllBlurbs);

app.get('/', (req: Request, res: Response) => {
    res.send('API is running! ')
});

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
