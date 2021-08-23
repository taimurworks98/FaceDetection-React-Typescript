import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/controls/useForm';
import * as employeeService from "../users/employeeService";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Appbar, { AppbarTrespassers } from '../../components/Appbar';
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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: theme.spacing(3),
      backgroundColor: '#F5F5F5',
    },
    imageList: {
        width: 500,
        height: 300,
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    // img: {
    //   width:500,
    //   height:450,
    // },
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

const UserItems = [
    { id: 'superAdmn', title: 'Super Admin' },
    { id: 'admin', title: 'Admin' },
    { id: 'user', title: 'User' },
    { id: 'visitor', title: 'Visitor' },
]

const initialFValues = {
    id: '',
    fullName: '',
    role: 'SuperAdmin',
    departmentId: '',
    isPermanent: false,
}

export default function TrespassingLog(props:any) {


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
const loadFile = function(event:any) {
    const output = document.getElementById('output') as HTMLImageElement;
    console.log('test',output);
    // for(var i = 0; i <3; i++){
    if(output){
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
        URL.revokeObjectURL(output.src) // free memory
    }
}
   
};
// }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppbarTrespassers/>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
        
          <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                <br/>
                  <form >
                    <label style={{marginLeft:100}}>Select images : </label>
                    <input type="file" id="myfile" accept="image/*" onChange={ e => loadFile(e)} name="myfile" multiple/>
                    <br />
                    <br />
                    <ImageList rowHeight={180} className={classes.imageList}>
                      <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div" style={{marginLeft:180}}>Trespassers</ListSubheader>
                      </ImageListItem>
                    
                      <ImageListItem style={{width:'70%',height:'100%'}}>
                        <img id="output"/>
                      </ImageListItem>                   
                    </ImageList>
                    <img id="output"/>
                    <br />
                    <br />
                    {/* <input type="submit" style={{marginLeft:210}}/> */}
                  </form>
                <br/>
                <br/>
                    
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