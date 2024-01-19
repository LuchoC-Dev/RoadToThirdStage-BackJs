import { Schema, model } from 'mongoose';
import cartProductSchema from './cartProduct';

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

const cartModel = model('carts', schema);

export default cartModel;
