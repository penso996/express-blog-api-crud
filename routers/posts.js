// Calling express for routing
const express = require("express");
const router = express.Router();

// Importing controller functions
const postsController = require("../controllers/postsController");

// POSTS CRUD
// index
router.get("/", postsController.index);

// show
router.get("/:id", postsController.show);

// store
router.post("/", function (req, res) {
    res.send("Create new posts");
});

// update
router.put("/:id", function (req, res) {
    res.send("Modify post " + req.params.id);
});

// modify
router.patch("/:id", function (req, res) {
    res.send("Modify post " + req.params.id);
});

// destroy
router.delete("/:id", postsController.destroy);


// Export router module
module.exports = router;