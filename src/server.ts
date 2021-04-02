import http from 'http';

import app from './app';

const PORT = process.env.PORT;

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(PORT);
console.log(`INFO: Server listening on port ${PORT}`);
