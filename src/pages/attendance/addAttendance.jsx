import React from "react";
import { Grid, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Controls from "../../components/controls/Controls";
import * as employeeService from "../users/employeeService";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useForm, Form } from '../../components/controls/useForm';
import { AppbarAttendance } from '../../components/Appbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
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
      backgroundColor: '#F5F5F5',
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

const initialFValues = {
  name: "",
  department: "",
  role: "",
  date: "",
  attendance: "",
  Date: new Date(),
};

const UserItems = [
  { id: 'superAdmn', title: 'Super Admin' },
  { id: 'admin', title: 'Admin' },
  { id: 'user', title: 'User' },
]

export default function AddAttendance(props){

  const classes = useStyles();

  

  const validate = (fieldValues = values) => {
    let temp = { ...errors  }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    // if ('department' in fieldValues)
    // temp.fullName = fieldValues.fullName ? "" : "This field is required."
    // if ('mobile' in fieldValues)
    //     temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
  }

  const add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.department === "" || this.state.role === "" || this.state.date === "" || this.state.attendance === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addAttendanceHandler(this.state);
    this.setState({ name: "", department: "", role: "", date: "", attendance: "" });
    this.props.history.push("/");
  };
  
    const {
      values,
      // setValues,
      errors,
      setErrors,
      handleInputChange,
      resetForm
  } = useForm(initialFValues, true, validate);
  
  const handleSubmit = (e) => {
    if (this.state.name === "" || this.state.department === "" || this.state.role === "" || this.state.date === "" || this.state.attendance === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addAttendanceHandler(this.state);
    this.setState({ name: "", department: "", role: "", date: "", attendance: "" });
    this.props.history.push("/");
      // e.preventDefault()
      // if (validate()){
      //     employeeService.insertEmployee(values)
      //     resetForm()
      // }
  }
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppbarAttendance/>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
        <Form onSubmit={handleSubmit}>
        <Grid item xs={6}>
            <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
            />
            <Controls.Select
                name="departmentId"
                label="Department"
                value={values.departmentId}
                onChange={handleInputChange}
                options={employeeService.getDepartmentCollection()}
            />
            <Controls.RadioGroup
                name="user"
                label=""
                value={values.user}
                onChange={handleInputChange}
                items={UserItems}
            />
            {/* <Controls.Input
                label="Id"
                name="id"
                value={values.id}
                onChange={handleInputChange}
            /> */}
            <Controls.DatePicker
                name="Date"
                label="Date"
                value={values.Date}
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
            
            {/* <div className="field">
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Department: </label>
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={this.state.department}
              onChange={(e) => this.setState({ department: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Role: </label>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={this.state.role}
              onChange={(e) => this.setState({ role: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Date: </label>
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Attendance: </label>
            <input
              type="text"
              name="attendance"
              placeholder="Attendance"
              value={this.state.attendance}
              onChange={(e) => this.setState({ attendance: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button> */}
        </Form>
        </Paper>
        </Grid>
        </Grid>
        </Container>
        </main>
      </div>
    );
  
}