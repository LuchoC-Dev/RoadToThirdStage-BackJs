import { Schema } from 'mongoose';

const schema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'products',
  },
  quantity: {
    type: Number,
    index: false,
    default: 1,
  },
});

export default schema;
