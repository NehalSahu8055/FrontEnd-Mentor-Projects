import { Invoice } from '../models/invoice.js';

export const controllers = () => {
  // --------------------------------- USING MONGOOSE ----------------------------------

  const create = async (req, res) => {
    const invoice = new Invoice(req.body);
    try {
      await invoice.save();
      res.status(201).json(req.body);
    } catch (error) {
      res.status(400).json({ error });
    }
  };

  const getAll = async (req, res) => {
    try {
      res.json(await Invoice.find({}));
    } catch (error) {
      res.status(404).json(error);
    }
  };

  const get = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    try {
      res.json(await Invoice.findById(id));
    } catch (error) {
      res.status(404).json(error);
    }
  };

  const update = async (req, res) => {
    const id = req.params.id;
    try {
      res.json(await Invoice.updateMany({ id: id }, { status: 'paid' }));
    } catch (error) {
      res.status(404).json(error);
    }
  };
  const replace = async (req, res) => {
    // const id = req.params.id;
    try {
      res.json(await Invoice.replaceOne({ id: id }, req.body));
    } catch (error) {
      res.status(404).json(error);
    }
  };
  const remove = async (req, res) => {
    const id = req.params.id;
    try {
      res.json(await Invoice.deleteMany({ id: id }));
    } catch (error) {
      res.status(404).json(error);
    }
  };

  return {
    create,
    getAll,
    get,
    update,
    replace,
    remove,
  };
};
