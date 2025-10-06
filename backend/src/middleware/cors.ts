import cors from 'cors';
import { CONFIG } from '../env';


export const corsMiddleware = cors({
    origin: CONFIG.CORS_ORIGIN,
    credentials: true
});