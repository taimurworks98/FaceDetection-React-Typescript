import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/controls/useForm';
import * as employeeService from "../users/employeeService";
import { WebcamCapture} from '../../components/WebcamCapture'
import '../../components/webcam.css'
import Appbar, { AppbarUser } from '../../components/Appbar';
import Copyright from '../../components/Copyright';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing(3),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  }),
);

const UserItems = [
    { id: 'superAdmn', title: 'Super Admin' },
    { id: 'admin', title: 'Admin' },
    { id: 'user', title: 'User' },
]

const initialFValues = {
    id: '',
    fullName: '',
    role: 'SuperAdmin',
    departmentId: '',
    isPermanent: false,
}

export default function UserRegistration(props:any) {

  const classes = useStyles();

  const validate = (fieldValues = values) => {
    let temp:any = { ...errors  }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
}

const {
    values,
    // setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFValues, true, validate);

const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if (validate()){
        employeeService.insertEmployee(values)
        resetForm()
    }
}

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarUser/>
      
      <main className={classes.content}>
      <div className={classes.toolbar} />

      <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>

              <Form onSubmit={handleSubmit}>
                <Grid container>
                <Grid item xs={6}>
                  <div style={{padding: '1%', marginLeft:'18%' }}>
                       <WebcamCapture/>
                  </div>

                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Id"
                        name="id"
                        value={values.id}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                    <Controls.RadioGroup
                        name="user"
                        label=""
                        value={values.user}
                        onChange={handleInputChange}
                        items={UserItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />
                    <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div style={{float:'left',marginLeft:'60px'}}>
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
