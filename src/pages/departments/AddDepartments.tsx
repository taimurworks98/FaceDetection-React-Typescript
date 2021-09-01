import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/controls/useForm';
import * as employeeService from "../users/employeeService";
import Appbar, { AppbarDepartments } from '../../components/Appbar';
import Copyright from '../../components/Copyright';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing(3),
      backgroundColor: '#F5F5F5',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  }),
);

const initialFValues = {
    id: '',
    DepartmentName: '',
}

export default function AddDepartments(props:any) {

  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp:any = { ...errors  }
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    if ('DepartmentName' in fieldValues)
        temp.DepartmentName = fieldValues.DepartmentName ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
}

const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFValues, true, validate);

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (validate()){
        employeeService.insertDepartmentsCollection(values)
        resetForm()
    }
}

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppbarDepartments/>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
                <Form onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Controls.Input
                        label="Department Id"
                        name="department id"
                        value={values.id}
                        onChange={handleInputChange}
                      />
                      <Controls.Input
                        name="Department Name"
                        label="Department Name"
                        value={values.DepartmentName}
                        onChange={handleInputChange}
                      />
                    
                    
                      <div style={{float:'left',marginLeft:'5px'}}>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                      </div>
                    </Grid>
                  </Grid>
                </Form>

              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>



      </main>
    </div>
  );
}
