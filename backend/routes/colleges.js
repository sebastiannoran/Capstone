const express = require("express");
const router = express.Router();
// const { authenticateUser } = require("../middleware/auth");
// const { ForbiddenError, NotFoundError } = require("../errors");
const { College } = require("../models");

const getCollege = async (id) => {
  const college = await College.findByPk(parseInt(id, 10));
  if (!college) {
    throw new NotFoundError("College not found");
  }
  return college;
};

// Get all colleges
router.get("/", async (req, res) => {
  try {
    const allColleges = await College.findAll();

    res.status(200).json(allColleges);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Get a specific college
router.get("/:id", async (req, res) => {
  try {
    const college = await getCollege(req.params.id);

    if (college) {
      res.status(200).json(college);
    } else {
      res.status(404).send({ message: "College not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
