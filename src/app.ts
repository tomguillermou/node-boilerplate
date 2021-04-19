import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import routes from '@config/routes';

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Enabling CORS Pre-Flight
// app.options('*', cors()); // include before other routes

// Plug routes
app.use(routes);

export { app };
