import http from 'http';

import { createApp } from './app';

const { PORT } = process.env;

async function createServer(): Promise<void> {
  // Create HTTP server.
  const app = await createApp();
  const server = http.createServer(app);

  // Listen on provided port, on all network interfaces.
  server.listen(PORT);
}

createServer()
  .then(() => console.log(`[info] Server listening on port ${PORT}`))
  .catch(() => console.error('[error] Error while creating the server'));
