/*
 * Server disabled to restore Preview functionality.
 * 
 * note: The Preview environment automatically handles TypeScript/JSX compilation.
 * The previous server.js bypassed this, causing the browser to receive raw code it couldn't run.
 * 
 * To deploy to Cloud Run, this application would typically need a build step (e.g., 'npm run build' with Vite)
 * to generate static assets, which this server could then serve.
 */
console.log("Server disabled for preview mode.");
