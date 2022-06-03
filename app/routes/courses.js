const express = require('express')
const {
  getCourses,
  getCourseById,
  getCurriculumByCourseId,
} = require("../controllers/courses");

const router = express.Router();

router.get("/", getCourses);

router.get("/{id}", getCourseById);

router.get("/{id}/public-curriculum-items", getCurriculumByCourseId);

module.exports = router;
