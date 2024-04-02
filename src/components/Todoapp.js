import React from 'react';
import { connect } from 'react-redux';
import { setData, select_Id } from '../Redux/Actions/ActionTodo';
import { getTodo, newTodo, deleteTodo } from '../Redux/Apis/Api';
import { useEffect, useState } from 'react';
import { Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Todoapp = ({ data, setData }) => {
  useEffect(() => {
    alltodosdata(); // Fetch data on component mount
  }, []);

  const [formData, setFormData] = useState({ todoContent: '' });

  console.log("this is all todos data", data);

  const alltodosdata = async () => {
    const todos = await getTodo();
    setData(todos);
  };
  const handleInputChange = (event, field) => {
    setFormData({ ...formData, [field]: event.target.value });
  }
  const handleAdd = async (e) => {
    e.preventDefault();

    try {
      if (formData.todoContent !== '') {
        await newTodo(formData);
        console.log("this is form data----------->", formData)
        alltodosdata();

        setFormData({
          todoContent: ''
        });

      } else {
        alert("Please fill all details");
      }
    } catch (error) {
      console.error('Error adding student:', error);
    }
  }
  const handleDelete = async (id) => {
    try {
      await deleteTodo(id)
      alert("Student is successfully Deleted....!")
      alltodosdata();
    } catch (error) {
      console.log("Student Successfully Deleted")
    }
  }
  const handleEdit = (todo) => {
    console.log("edit data",todo.todoContent);
   setFormData({todoContent:todo.todoContent });
   
  };

  return (
    <Grid container spacing={2} padding="20px" justifyContent="center" >
      <Grid item   >
        <TextField id="outlined-basic" label="Outlined" variant="outlined"  value={formData.todoContent} onChange={(e) => handleInputChange(e, 'todoContent')} />
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </Grid>
      <Grid item xs={12} >
        <TableContainer component={Paper} boxShadow={3}>
          <Table style={{ border: '1px solid transparent' }}>
            <TableHead>
              <TableRow>
                <TableCell><Typography variant='h5'> Content</Typography></TableCell>
                <TableCell><Typography variant='h5'> Edit</Typography></TableCell>
                <TableCell><Typography variant='h5' > Delete</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell>{todo.todoContent}</TableCell>
                  <TableCell>
                    <Button variant='contained' onClick={() => handleEdit(todo)} >
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained' onClick={() => handleDelete(todo.id)} >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>

              ))}


            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    data: state.ReducerWeather.data,
    selectTodoId: state.selectTodoId,
  };
};

const mapDispatchToProps = {
  setData,
  select_Id,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todoapp);
