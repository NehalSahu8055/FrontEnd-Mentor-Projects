import express from 'express';
import { controllers } from './../controllers/control.js';

const invoiceRouter = express.Router();
const { create, getAll, get, update, replace, remove } = controllers();

invoiceRouter
  .post('', create)
  .get('', getAll)
  .get('/:id', get)
  .put('/:id', update)
  .patch('/:id', replace)
  .delete('/:id', remove);

export { invoiceRouter };
