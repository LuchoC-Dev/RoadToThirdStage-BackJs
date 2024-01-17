import { Model } from 'mongoose';

class Dao {
  constructor(model) {
    if (!(model instanceof Model)) {
      throw new Error('Dao expect a Model value');
    }
    this.model = model;
  }

  async create(obj) {
    return await this.model.create(obj);
  }

  async read(query) {
    return await this.model.find(query);
  }

  async readOne(query) {
    return await this.model.findOne(query);
  }

  async update(query, values) {
    return await this.model.updateMany(query, values);
  }

  async updateOne(query, values) {
    return await this.model.updateOne(query, values);
  }

  async delete(query) {
    return await this.model.deleteMany(query);
  }

  async deleteOne(query) {
    return await this.model.deleteOne(query);
  }
}

export default Dao;
