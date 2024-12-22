import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Paper,
  Grid,
} from '@mui/material';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/tasks', task);
      alert('Task added successfully!');
      setTask({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to add task.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 30 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Add Task
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                variant="outlined"
                value={task.title}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                variant="outlined"
                value={task.description}
                onChange={handleChange}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddTask;
