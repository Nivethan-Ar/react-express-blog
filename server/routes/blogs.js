import authenticate from '../middlewares/auth.middleware.js';
import Blog from '../models/blog.js';
import express from 'express';

const router = express.Router();

// Create a new blog post
router.post('/', authenticate, async (req, res) => {
  try {
    const { heading, body, author } = req.body;

    const blogPost = new Blog({
      heading,
      body,
      author,
    });

    await blogPost.save();

    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// Get all blog posts
router.get('/', authenticate, async (req, res) => {
  try {
    const blogPosts = await Blog.find().populate('author');
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog posts' });
  }
});

// Get a specific blog post
router.get('/:id', async (req, res) => {
  try {
    const blogPost = await Blog.findById(req.params.id).populate('author');

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog post' });
  }
});

// Update a blog post
router.put('/:id', authenticate, async (req, res) => {
  try {
    const { heading, body } = req.body;

    const blogPost = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        heading,
        body,
      },
      { new: true }
    );

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});

// Delete a blog post
router.delete('/:id', authenticate, async (req, res) => {
  try {
    const blogPost = await Blog.findByIdAndDelete(req.params.id);

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

export default router;
