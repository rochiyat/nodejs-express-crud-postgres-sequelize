module.exports = app => {
    const postings = require('../controllers/posting.controller.js');
    
    let router = require('express').Router();

    // Create a new Tutorial
    router.post("/", postings.create);

    // Retrieve all postings
    router.get("/", postings.findAll);

    // Retrieve all published postings
    router.get("/published", postings.findAllPublished);

    // Retrieve a single posting with id
    router.get("/:id", postings.findOne);

    // Update a posting with id
    router.put("/:id", postings.update);

    // Delete a posting with id
    router.delete("/:id", postings.delete);

    // Create a new Tutorial
    router.delete("/", postings.deleteAll);

    app.use('/api/postings', router);

}