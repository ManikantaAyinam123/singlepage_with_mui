import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setData } from '../Redux/actions/actionTodo';
import { getTodo, newTodo, deleteTodo, updateTodo } from '../Redux/apis/api';
import { Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TextField, Stack } from '@mui/material';

const Todoapp = ({ data, setData }) => {
  useEffect(() => {
    alltodosdata();
  }, []);

  const [formData, setFormData] = useState({ todoContent: '' });
  const [isUpdate, setIsUpdate] = useState(false);

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
      if (formData.todoContent.trim() !== '') {
        await newTodo(formData);
        alltodosdata();
        setFormData({ todoContent: '' });
      } else {
        alert("Please fill all details");
      }
    } catch (error) {
      console.error('Error adding Todo:', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id)
      alert("Todo is successfully Deleted....!")
      alltodosdata();
    } catch (error) {
      console.log("Todo Successfully Deleted")
    }
  }

  const handleEdit = (todo) => {
    setFormData({ id: todo.id, todoContent: todo.todoContent });
    setIsUpdate(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (formData.todoContent.trim() !== '') {
        setIsUpdate(false);
        await updateTodo(formData.id, formData);
        alltodosdata();
        setFormData({ id: '', todoContent: '' });
      }
      else {
        alert("Please fill details");
      }
    }
    catch (error) {
      console.error('Error updating Todo:', error);
    }
  }

  return (
    <Grid container spacing={2} justifyContent="center" padding="10px" >
      <Grid item xs={12} sm={8}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            id="outlined-basic"
            label="Add Todo"
            variant="outlined"

            value={formData.todoContent}
            onChange={(e) => handleInputChange(e, 'todoContent')}
            sx={{ width: '80%', height: "40px", }}
          />
          <Button
            variant="contained"
            onClick={isUpdate ? handleUpdate : handleAdd}

            sx={{ marginLeft: '10px', width: '20%', height: "40px", marginTop: '8px', fontWeight: 'bolder', boxShadow: '5' }}
          >
            {isUpdate ? 'Update' : 'Add'}
          </Button>
        </div>
        <TableContainer sx={{ marginTop: '20px', boxShadow: '5' }} >
          <Table  >
            <TableHead>
              <TableRow>
                <TableCell><Typography variant='h6'>Content</Typography></TableCell>
                <TableCell align="center"><Typography variant='h6'>Actions</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell>{todo.todoContent}</TableCell>
                  <TableCell align='center'>
                    <Stack direction="row" spacing={2} justifyContent={'center'}>
                      <Button variant='contained' sx={{ backgroundColor: '#6F4E37' }} onClick={() => handleEdit(todo)}>Edit</Button>
                      <Button variant='contained' sx={{ backgroundColor: '#FF0000' }} onClick={() => handleDelete(todo.id)}>Delete</Button>
                    </Stack>
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
  console.log("this is from mapStateTo props in todo", state.ReducerTodo.data)
  return {
    data: state.ReducerTodo.data,
  };
};

const mapDispatchToProps = {
  setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todoapp);
