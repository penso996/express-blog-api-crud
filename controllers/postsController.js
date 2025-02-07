// Importing data
const postsData = require("../data/data_posts");

// Function for posts routing behaviour
// Index function
function index(req, res) {

    // Filter by query ("tag")
    const tag = req.query.tag;

    if (tag) {
        const filteredPosts = postsData.filter(post => post.tags.includes(tag));

        // If list result empty
        if (filteredPosts.length === 0) {
            // Error 404
            res.status(404);
            return res.json({
                error: "Not found",
                message: "Post not found"
            });
        }

        // Or return filtered data
        return res.json(filteredPosts);
    }

    // OR show everything
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
        res.status(404);
        return res.json({
            error: "Not found",
            message: "Post not found"
        });
    }

    // OR return post in json format
    res.json(post);
};

// Store function
function store(req, res) {

    // Retrieve last post object
    const lastPost = postsData[postsData.length - 1];
    // Retrive last post id
    const idLastPost = lastPost.id;
    // Create new post id
    const newPostId = idLastPost + 1;
    // Create new post object
    const newPost = {
        id: newPostId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    // Add the new post in data_post
    postsData.push(newPost);

    // Console log to check new data_post
    console.log(postsData);
    // Send new status and new post json
    res.status(201);
    res.json(newPost);
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