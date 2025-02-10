// Imoorting express
const express = require("express");
const app = express();
const port = 3000;

// Defined middleware to serve static files from the "public" folder
app.use(express.static("public"));

// Defined middleware to parse JSON request bodies
app.use(express.json());

// Importing middleware to handle 404
const notFound = require("./middlewares/notFound");
// Defined middleware to handle 404
app.use(notFound);

// Defined home route
app.get("/", (req, res) => {
    res.send("Homepage");
});

// Importing main posts route
const postsRouter = require("./routers/postsRouters.js");
// Defined main posts route
app.use("/posts", postsRouter);


// Starting server on specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});