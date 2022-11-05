import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// uses body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// allow cors
app.use(cors());

import eventsRouter from './api/events';

app.use(eventsRouter);

export default app;
