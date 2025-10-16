/**
 * @fileoverview Express router handling comment resources.
 * Provides endpoints to list all comments and delete a comment by ID.
 * Relies on a Mongoose model named "Comment".
 */

/**
 * Retrieve all comments.
 *
 * GET /
 *
 * Responds with a JSON array of comments on success.
 *
 * @name listComments
 * @function
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Sends:
 * - 200 OK with JSON array of comments.
 * - 500 Internal Server Error with an error message if fetching fails.
 */

/**
 * Delete a comment by its MongoDB ObjectId.
 *
 * DELETE /:id
 *
 * Responds with a success message when deletion succeeds.
 *
 * @name deleteComment
 * @function
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {string} req.params.id - Comment ID (MongoDB ObjectId).
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} Sends:
 * - 200 OK with a success message when the comment is deleted.
 * - 404 Not Found if no comment exists with the provided ID.
 * - 500 Internal Server Error with an error message if deletion fails.
 */
// Hey github copilot 
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// another endpoint to delete a comment by id
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});