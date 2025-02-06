// Importing data
const postsData = require("../data/data_posts");

// Function for posts routing behaviour
// Index function
function index(req, res) {

    // Filter
    const tag = req.query.tag;

    if (tag) {
        const filteredPosts = postsData.filter(post => post.tags.includes(tag));

        if (filteredPosts.length === 0) {
            // Error 404
            res.status(404);
            return res.json({
                error: "Not found",
                message: "Post not found"
            })
        }

        return res.json(filteredPosts);
    }

    // OR show everything
    return res.json(postsData);
}

// Show function
function show(req, res) {
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // Error handling
    if (!post) {
        // Error 404
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post not found"
        })
    }

    // OR return post in json format
    res.json(post);
}

// Store function
//

// Update function
//

// Destroy function
function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // Error handling
    if (!post) {
        // Error 404
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post not found"
        })
    }

    // OR delete post
    postsData.splice(postsData.indexOf(post), 1);

    // Affirmative status
    res.sendStatus(204);

    // Console log
    console.log(postsData);
}

// Export controller module
module.exports = { index, show, destroy }