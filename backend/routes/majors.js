const express = require("express");
const router = express.Router();
// const { authenticateUser } = require("../middleware/auth");
// const { ForbiddenError, NotFoundError } = require("../errors");
const { Major } = require("../models");

const getMajor = async (id) => {
  const major = await Major.findByPk(parseInt(id, 10));
  if (!major) {
    throw new NotFoundError("Major not found");
  }
  return major;
};

// Get all majors
router.get("/", async (req, res) => {
  try {
    const whereClause = {};
    if (req.query.collegeId) {
      whereClause.CollegeId = req.query.collegeId;
    }
    const allMajors = await Major.findAll({ where: whereClause });

    res.status(200).json(allMajors);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

// Get a specific major
router.get("/:id", async (req, res) => {
  try {
    const major = await getMajor(req.params.id);

    if (major) {
      res.status(200).json(major);
    } else {
      res.status(404).send({ message: "Major not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
