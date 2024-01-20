import express from 'express';
import apiProductsRouter from '../routes/api/products/products.routes.js';
import apiCartsRouter from '../routes/api/carts/carts.routes.js';
import apiCartsProductsRouter from '../routes/api/carts/products/products.routes.js';
import MongoDb from './MongoDb.js';
import { APP_URL, PORT } from '../utils/env.js';
class App {
  constructor() {}

  async init() {
    this.expressInit();
    this.middlewaresInit();
    await this.databaseInit();
    this.routerInit();
  }

  expressInit() {
    this.app = express();
    this.appListen = this.app.listen(PORT, () => {
      console.log(`Express server started successfully\n${APP_URL}`);
    });
  }

  middlewaresInit() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routerInit() {
    this.app.use('/', apiProductsRouter);
    this.app.use('/', apiCartsRouter);
    this.app.use('/', apiCartsProductsRouter);
  }

  async databaseInit() {
    await MongoDb.init();
  }
}

const application = new App();

export default application;
