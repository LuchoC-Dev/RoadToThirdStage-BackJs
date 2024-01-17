import { Schema, model } from 'mongoose';

const schema = new Schema({});

const productsModel = model('products', schema);

export default productsModel;
