async function environment() {
  try {
    const app = new App();
    app.init();
    console.log(`Environment start success`);
  } catch (error) {
    console.error(`Error in environment launch`);
  }
}
