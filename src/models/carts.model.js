import { Schema, model } from 'mongoose';
import cartProductSchema from './cartProduct.schema.js';

const schema = new Schema({
  products: {
    type: [
      {
        type: cartProductSchema,
      },
    ],
    default: [],
    index: false,
  },
});

const cartsModel = model('carts', schema);

export default cartsModel;
