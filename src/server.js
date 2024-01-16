import App from './class/App';

async function environment() {
  try {
    const app = new App();
    app.init();
    console.log(`Environment started successfully`);
  } catch (error) {
    console.error(`Error in environment launch`);
  }
}

environment();
