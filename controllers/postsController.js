// Importing data
const postsData = require("../data/data_posts");

// Function for posts routing behaviour
// Index function
function index(req, res) {

    // If no element found
    if (postsData.length === 0) {

        // Error 404
        return res.status(404).json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // OR return data if found
    return res.json(postsData);
};

// Show function
function show(req, res) {

    // Filter by id
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no element found by id
    if (!post) {
        // Error 404
        return res.status(404).json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // OR return post in json format
    res.json(post);
};

// Store function
function store(req, res) {

    // Retrieve the last post object to determine the next available ID
    const lastPostId = postsData[postsData.length - 1];
    // If there are posts, increment the last post's ID, otherwise set the ID to 1 (for the first post)
    const newPostId = lastPostId ? lastPostId.id + 1 : 1;

    // Create a new post object using data from the request body
    const newPost = {
        id: newPostId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    // Add the new post object to the postsData array
    postsData.push(newPost);

    // Send the response with a 201 status indicating that the post was created, and return the new post in JSON format
    res.status(201).json(newPost);

    // Log the updated postsData array to the console for debugging purposes
    console.log(postsData);
};

// Update function
function update(req, res) {

    // Filter by id
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no element found by id
    if (!post) {
        // Error 404
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // Modify whole post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // Console log to check new data_post
    console.log(postsData);

    // Send new modified post json
    res.json(postsData[id - 1]);
};

// Modify
function modify(req, res) {
    // Filter by id
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no element found by id
    if (!post) {
        // Error 404
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // Modify only post data fields given
    req.body.title ? post.title = req.body.title : post.title = post.title;
    req.body.content ? post.content = req.body.content : post.content = post.content;
    req.body.image ? post.image = req.body.image : post.image = post.image;
    req.body.tag ? post.tag = req.body.title : post.title = post.title;

    // Console log to check new data_post
    console.log(postsData);

    // Send new modified post json
    res.json(postsData[id - 1]);
};

// Destroy function
function destroy(req, res) {

    // Destroy by id
    const id = parseInt(req.params.id);
    const post = postsData.find(post => post.id === id);

    // If no element found by id
    if (!post) {
        // Error 404
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // OR delete post
    postsData.splice(postsData.indexOf(post), 1);
    // Send affirmative status
    res.sendStatus(204);
    // Console log with updated data
    console.log(postsData);
};


// Export controller module
module.exports = { index, show, store, update, modify, destroy }