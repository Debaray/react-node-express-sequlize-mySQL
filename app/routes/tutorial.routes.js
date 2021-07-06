module.exports = app => {

    const tutorialsController = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //Create a new tutorial
    router.post("/", tutorialsController.create);

    //Retrive all tutorials
    router.get("/", tutorialsController.findAll);

    //Retrieve all published Tutorials
    router.get("/published", tutorialsController.findAllPublished);

    //Retreive a single Tutorial with id
    router.get("/:id", tutorialsController.findOne);

    //Update a tutorial with id
    router.put("/:id", tutorialsController.update);

    //Delete a tutorial with id
    router.delete("/:id", tutorialsController.delete);

    //Delete all tutorials
    router.delete("/", tutorialsController.deleteAll);

    app.use('/api/tutorials', router);
}