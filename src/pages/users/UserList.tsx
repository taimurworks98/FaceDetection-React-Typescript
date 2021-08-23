import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableCell, TableRow, TableBody, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/controls/useForm';
import * as employeeService from "../users/employeeService";
import Appbar, {AppbarUserList } from '../../components/Appbar';
import { Link } from 'react-router-dom';
import { inherits } from 'util';
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
    // toolbar: theme.mixins.toolbar,
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
    table: {
        width: '90%',
        margin: '10px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 17,
            background: '#3f51b5',
            color: '#FFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 15
        }
    },
    appBarSpacer: theme.mixins.toolbar,
  }),
);

const initialFValues = {
    id: '',
    DepartmentName: '',
}

export default function UserList(props:any) {

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

// const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault()
//     if (validate()){
//         employeeService.insertDepartmentsCollection(values)
//         resetForm()
//     }
// }

// const AllUsers = () => {
//     const [users, setUsers] = useState([]);
//     const classes = useStyles();

//     useEffect(() => {
//         getAllUsers();
//     }, []);

  return (
    <div className={classes.root}>
        <CssBaseline />

        <AppbarUserList/>
        <main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                
              <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
        </Table>
            {/* <TableBody>
                {users.map((user:any) => (
                    <TableRow className={classes.row} key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit`}>Edit</Button> */}
                            {/* (next to `/edit`) /${user.id} */}
                            {/* <Button color="secondary" variant="contained" >Delete</Button>  */}
                            {/* (inside button)onClick={() => deleteUserData(user.id)} */}
                        {/* </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table> */}


              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
        
        {/* users page be imported here*/}


      </main>
    </div>
    );}   

