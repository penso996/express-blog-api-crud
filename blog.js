// Calling express
const express = require("express");
const blog = express();
const port = 3000;

// Defined static folder
blog.use(express.static("public"));

// Defined home route
blog.get("/", (req, res) => {
    res.send("Homepage");
})

// Importing main posts route
const postsRouter = require("./routers/posts");
// Defined main posts route
blog.use("/posts", postsRouter);


// Starting server on specified port
blog.listen(port, () => {
    console.log(`Listening on port ${port}`)
})