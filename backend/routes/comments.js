const express = require('express');
const router = express.Router();
const authenticateUser = require("./auth");
const {Comment} = require('../models');

// Create a new Comment
router.post('/', authenticateUser, async (req, res) => {
    const { content, PostId } = req.body;
    const UserId = req.session.user.id;
  
    try {
      const newComment = await Comment.create({ content, UserId, PostId });
      res.json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

// Retrieve all Comments for a specific Post
router.get('/posts/:id', async (req, res) => {
  const PostId = req.params.id;

  try {
    const post = await Post.findOne({ where: { id: PostId } });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comments = await Comment.findAll({where: {id: PostId }});

    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Retrieve a specific Comment by ID
router.get('/:id', async (req, res) => {
  const commentId = req.params.id;

  try {
    const comment = await Comment.findOne({ where: { id: commentId } });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a Comment
router.put('/:id', authenticateUser, async (req, res) => {
  const commentId = req.params.id;
  const { content } = req.body;

  try {
    const comment = await Comment.findOne({ where: { id: commentId } });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if the authenticated user is the owner of the comment
    if (req.session.user.id !== comment.UserId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await comment.update({ content });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a Comment
router.delete('/:id', authenticateUser, async (req, res) => {
  const commentId = req.params.id;

  try {
    const comment = await Comment.findOne({ where: { id: commentId } });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if the authenticated user is the owner of the comment
    if (req.session.user.id !== comment.UserId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await comment.destroy();
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;