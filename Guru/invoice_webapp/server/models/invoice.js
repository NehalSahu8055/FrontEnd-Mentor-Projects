import mongoose, { Schema, model } from 'mongoose';

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Database Connected');
}

const invoiceSchema = new Schema({
  id: String,
  createdAt: String,
  paymentDue: String,
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: String,
  status: String,
  senderAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number,
    },
  ],
  total: Number,
});

const Invoice = new model('Invoice', invoiceSchema);

export { Invoice };
