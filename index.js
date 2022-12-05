const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000 ;

app.use(cors());

const courses = require('./Data/courses.json')
const coursesDetails = require('./Data/course-details.json')

app.get('/', (req, res)=>{
    res.send('Coder Brain Server Running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = coursesDetails.find(c => c.id === id)
    res.send(selectedCourse)
})

app.get('/course-details', (req, res) =>{
    res.send(coursesDetails)
})

app.get('/course-details/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = coursesDetails.find(c => c.id === id)
    res.send(selectedCourse);
    console.log(req);
})



app.listen(port, ()=>{
    console.log('Coder Brain Port', port);
})