'use client';
import React, { useEffect, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';

const CourseForm = () => {
    const [courseData, setCourseData] = useState(
        {
            name: '',
            price: '',
        }
    );
    const [courses, setCourses] = useState([])

    function createData(name, price) {
        return { name, price };
      }
      const rows = [
        createData('Frozen yoghurt', 159),

      ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Make an API call here with Axios or any other library
        try {
            const response = await axios.post('http://localhost:5000/course', { "courseName": courseData.name, "coursePrice": courseData.price });
            // Handle success or errors here
            console.log('API Response:', response.data);
            handleGetCourses()
        } catch (error) {
            // Handle API call error
            console.error('API Error:', error);

        }
    };

    const handleGetCourses = async (e) => {
        try{
            const response = await axios.get('http://localhost:5000/courses');
            console.log('API Response ', response.data)
            console.log(response.data[0])
            setCourses(response.data)
        }
        catch  (error){
            console.error('API Error:', error);
        }
    }

    const handleDeleteCourse = async (id) => {
        try{
            const response = await axios.delete(`http://localhost:5000/course/${id}`);
            console.log('API Response ', response.data)
            handleGetCourses()
        }
        catch  (error){
            console.error('API Error:', error);
        }

    }
useEffect(()=> {
    handleGetCourses()
},[])
    return (
        <>
            <form onSubmit={handleSubmit}>
            <Box>
                <TextField
                    label="Course Name"
                    name="name"
                    value={courseData.name}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
            </Box>
            <Box>
                <TextField
                    label="Price"
                    name="price"
                    value={courseData.price}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                />
            </Box>
            <Box>
                <Button type="submit" variant="contained" color="primary">
                    Create Course
                </Button>
            </Box>
            <div>
                {courseData.name}
            </div>
        </form>
        {/* <Box>
                <Button variant="contained" color="primary"   onClick={() => { handleGetCourses()
  }}>
                    GET COURSES
                </Button>
            </Box> */}

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          { courses.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.courseName}
              </TableCell>
              <TableCell align="right">{row.coursePrice}</TableCell>
              <TableCell align="right">
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => { handleDeleteCourse(row._id)}} />
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
        </>
    

    );
};

export default CourseForm;
