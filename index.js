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

app.get("/course-name", (req, res) => {
  res.send(courses);
});
// 08/07 => id like this
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(courseDetails);
  } else {
    const course_details = courseDetails.filter((c) => c.id === id);
    res.send(course_details);
  }
});

app.get("/details", (req, res) => {
  res.send(courseDetails);
});

// id => 0282e0e58a5c404fbd15261f11c2ab6a
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courseDetails.find(
    (course) => course.course_id === id
  );
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log(`ThryVI educational Server running on port: ${port}`);
});
