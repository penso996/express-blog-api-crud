// Calling express
const express = require("express");
const app = express();
const port = 3000;

// Defined static folder
app.use(express.static("public"));

// Defined home route
app.get("/", (req, res) => {
    res.send("Homepage");
})

// Importing main posts route
const postsRouter = require("./routers/postsRouters.js");
// Defined main posts route
app.use("/posts", postsRouter);


// Starting server on specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})