// Imoorting express
const express = require("express");
const app = express();
const port = 3000;

// Importing main posts route
const postsRouter = require("./routers/postsRouters.js");

// Importing 404 error handling
const notFound = require("./middlewares/notFound.js");

// Importing 500 error handling
const errorsHandler = require("./middlewares/errorsHandler.js");

// Defined middleware to serve static files from the "public" folder
app.use(express.static("public"));

// Defined middleware to parse JSON request bodies
app.use(express.json());

// Defined 500 error handling behaviour
app.use(errorsHandler);

// Defined home route
app.get("/", (req, res) => {
    res.send("Homepage");
});

// Defined main posts route
app.use("/posts", postsRouter);

// Defined 404 error handling
app.use(notFound);

// Starting server on specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});