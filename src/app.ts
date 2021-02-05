import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import { connect } from '@utils/database';

import routes from './routes';

const app = express();

// Connect to database
connect();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

// Enabling CORS Pre-Flight
app.options('*', cors()); // include before other routes

// Bind routes
app.use(routes);

export default app;
