import { Schema, model } from 'mongoose';

const schema = new Schema({
  products: {
    type: [
      {
        type: {},
      },
    ],
    default: [],
    index: false,
  },
});

const cartModel = model('carts', schema);

export default cartModel;
