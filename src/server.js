import application from './class/App.js';

async function environment() {
  try {
    await application.init();
    console.log(`Environment started successfully`);
  } catch (error) {
    console.error(`Error in environment launch`);
  }
}

environment();
