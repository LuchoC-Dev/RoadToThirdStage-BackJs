import app from './class/App.js';

async function environment() {
  try {
    await app.init();
    console.log(`Environment started successfully`);
  } catch (error) {
    console.error(`Error in environment launch`);
  }
}

environment();
