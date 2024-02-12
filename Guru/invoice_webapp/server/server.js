import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { invoiceRouter } from './routes/invoice.js';

const server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
server.use(express.json());
server.use(morgan('combined'));
server.use(cors());
server.use(express.static(process.env.PUBLIC_DIR));

// base url set
server.use('/api/invoices', invoiceRouter);

// routing
server.get('/', (req, res) => {
  res.json({ name: 'Nehal' });
  res.send('<h1>Hello</h1>');
});

server.listen(process.env.PORT, () => {
  console.log('Server Started...');
});
