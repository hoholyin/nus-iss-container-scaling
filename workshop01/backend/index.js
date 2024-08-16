// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
// const cors = require('cors');
let apiRoutes = require('./api-routes')

let port = process.env.PORT
if (port == null || port === "") {
    port = 8080;
}

// app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.use('/api', apiRoutes)
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and Nodemon'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running backend on port " + port);
});
