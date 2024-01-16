import express from 'express';
class App {
  constructor() {}

  async init() {
    expressInit();
    middlewaresInit();
  }

  expressInit() {
    this.app = express();
    this.appListen = this.app.listen(() => console.log(`Express server started successfully`));
  }

  middlewaresInit() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default App;
