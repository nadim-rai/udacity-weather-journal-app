//Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

//Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

const port = 8000;
// Spin up the server 
const server = app.listen(port, listening);

//Callback to debug
function listening(){
    console.log('server running');
    console.log(`CORS-enabled web server listening on port${port}`)
}