const express = require("express");
const router = express.Router();
const questionController = require("../../../controllers/question.controller");

// Get all questions
router.get("/", questionController.getAllQuestions);

// Create a new question
router.post("/", questionController.createQuestion);

// Update a question
router.put("/:id", questionController.updateQuestion);

// Delete a question
router.delete("/:id", questionController.deleteQuestion);

module.exports = router;
