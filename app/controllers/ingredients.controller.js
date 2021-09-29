const db = require("../models/ingredients.model");

// Create and Save a new Ingredients
exports.createIngredients = async (req, res) => {
  // Validate request
  if (!(req.body.sku && req.body.name && req.body.vendor_id)) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Ingredients
  const Reservation = {
    sku: req.body.sku,
    name: req.body.name,
    vendor_id: req.body.vendor_id,
    category: req.body.category,
    quality_requirements: {
      receiving_temp_low: req.body.receiving_temp_low,
      receiving_temp_high: req.body.receiving_temp_high
    },
    images: [
      {
        source_url: req.body.source_url,
        description: req.body.description
      }
    ]
  };

  // Save Ingredients in the database
  db.create(Reservation)
    .then(data => {
      res.send(data._id);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the carsrace."
      });
    });
};

// Retrieve all Ingredients from the database.
exports.findAllIngredients = (req, res) => {
  db.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving carsrace."
      });
    });
};

// Find a single Ingredients with an id
exports.findOneIngredients = (req, res) => {
  const id = req.params.id;

  db.findById(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Ingredients with id=" + id
      });
    });
};

// Delete a Ingredients with the specified id in the request
exports.deleteIngredients = (req, res) => {
  const id = req.params.id;

  db.findByIdAndRemove(id)
    .then(note => {
      if (!note) {
        return res.status(404).send({
          message: "Ingredients not found with id " + req.params.id
        });
      }
      res.send({ message: "Ingredients deleted successfully!" + req.params.id });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Ingredients not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete Ingredients with id " + req.params.id
      });
    });
};
