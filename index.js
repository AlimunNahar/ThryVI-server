const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const courseDetails = require("./data/details.json");

app.get("/", (req, res) => {
  res.send("Courses API Running!");
});

app.get("/course-categories", (req, res) => {
  res.send(courses);
});

app.get("/details", (req, res) => {
  res.send(courseDetails);
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = news.find((n) => n._id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`ThryVI educational Server running on port: ${port}`);
});
