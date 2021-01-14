
const http = require('http');
const app = require('./app');

// defines which port to use
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server started successfully")
});