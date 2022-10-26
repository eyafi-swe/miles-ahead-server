const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');

app.use(cors());
const blogs = require('./data/blogs.json');
const courseCategories = require('./data/courses_categories.json');
const courses = require('./data/coursees.json');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blogs', (req, res) => {
  res.send(blogs);
})

app.get('/course_categories', (req, res) => {
  res.send(courseCategories);
})

app.get('/course_categories/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  const categoryCourse = courses.filter(course => course.category_id === id)
  res.send(categoryCourse);
})

app.get('/courses', (req, res) => {
  res.send(courses);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})