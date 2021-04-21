import http from 'http';

import { app } from './app';

const { PORT } = process.env;

export function createHttpServer(): void {
  // Create HTTP server
  const server = http.createServer(app);

  // Listen on provided port, on all network interfaces
  server.listen(PORT);
  console.log(`[log] Server listening on port: ${PORT}`);
}
