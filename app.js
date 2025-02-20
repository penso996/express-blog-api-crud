// Imoorting express
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// Defined middleware to enable CORS only for the frontend 
app.use(cors({ origin: ["http://localhost:5173/"] }));

// Defined middleware to serve static files from the "public" folder
app.use(express.static("public"));

// Defined middleware to parse JSON request bodies
app.use(express.json());

// Defined home route
app.get("/", (req, res) => {
    res.send("Homepage");
});

// Importing main posts route
const postsRouter = require("./routers/postsRouters.js");
// Defined main posts route
app.use("/posts", postsRouter);

// Importing 404 error handling
const notFound = require("./middlewares/notFound.js");
// Defined 404 error handling
app.use(notFound);

// Importing 500 error handling
const errorsHandler = require("./middlewares/errorsHandler.js");
// Defined 500 error handling behaviour
app.use(errorsHandler);


// Starting server on specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});