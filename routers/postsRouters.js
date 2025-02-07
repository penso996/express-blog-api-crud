// Calling express for routing
const express = require("express");
const postsRouter = express.Router();

// Importing controller functions
const postsController = require("../controllers/postsController");

// POSTS CRUD
// index (imported)
postsRouter.get("/", postsController.index);

// show (imported)
postsRouter.get("/:id", postsController.show);

// store
postsRouter.post("/", function (req, res) {
    res.send("Create new posts");
});

// update
postsRouter.put("/:id", function (req, res) {
    res.send("Totally modify post " + req.params.id);
});

// modify
postsRouter.patch("/:id", function (req, res) {
    res.send("Partially modify post " + req.params.id);
});

// destroy (imported)
postsRouter.delete("/:id", postsController.destroy);


// Export router module
module.exports = postsRouter;