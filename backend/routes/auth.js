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
        email_address: user.email_address,
        name: user.name,
      },
    });
  } else {
    return res.status(401).json({ user: null });
  }
});


// User registration endpoint
router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await User.create({
      name: req.body.name,
      email_address: req.body.email_address,
      password: hashedPassword,
    });

    req.session.userId = user.id;
    // Send a response to the client informing them that the user was successfully created
    res.status(201).json({
      message: "User created!",
      user: {
        name: user.name,
        email_address: user.email_address,
      },
    });
  } catch (err) {
    console.error(err);
    if (err.name === "SequelizeValidationError") {
      return res.status(422).json({ errors: err.errors.map((e) => e.message) });
    }
    res.status(500).json({
      message: "Error occurred while creating user",
      error: err,
    });
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
      user: {
        name: user.name,
        email_address: user.email_address,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.sendStatus(500);
    }

    res.clearCookie("connect.sid");
    return res.sendStatus(200);
  });
});
