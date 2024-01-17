import express from 'express';
import apiProductsRouter from '../routes/api/products/products.routes.js';
class App {
  constructor() {}

  async init() {
    this.expressInit();
    this.middlewaresInit();
    this.routerInit();
  }

  expressInit() {
    this.app = express();
    this.appListen = this.app.listen(() => console.log(`Express server started successfully`));
  }

  middlewaresInit() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routerInit() {
    this.app.use('/', apiProductsRouter);
  }
}

export default App;
