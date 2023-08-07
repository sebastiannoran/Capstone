const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const { User } = require("../models");
module.exports = router;

router.get("/current_user", async (req, res) => {
  if (req.session.userId) {
    const user = await User.findByPk(req.session.userId);
    return res.status(200).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } else {
    return res.status(401).json({ user: null });
  }
});

// Middleware for user authentication
const authenticateUser = (req, res, next) => {
  if (req.session.user) {
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// User registration endpoint
router.post("/register", async (req, res) => {
  const { name, email_address, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email_address } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      name,
      email_address,
      password: hashedPassword,
    });

    res.json(newUser);
    req.session.userId = newUser.id;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User login endpoint
router.post("/login", async (req, res) => {
  const { email_address, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ where: { email_address } });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare the passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Set session cookie upon successful login
    req.session.userId = user.id;

    res.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
