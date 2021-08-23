import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DomainIcon from '@material-ui/icons/Domain';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  
  <div>
       
    <ListItem button style={{marginTop:10}} component={ Link } activeClassName="highlighted" to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
      {/* <Link to="/" style={{ color:'#2E2E2E' , fontSize:17 , textDecoration: 'none'}}>Dashboard</Link> */}
    </ListItem>
    <ListItem button style={{marginTop:10}} component={ Link } activeClassName="highlighted" to="/UserRegistration">
      <ListItemIcon>      
        <GroupAddIcon />
      </ListItemIcon>
      <ListItemText primary="User Registration" />
      {/* <Link to="UserRegistration" style={{ color:'#2E2E2E' , fontSize:17 , textDecoration: 'none'}}>User Registration</Link> */}

    </ListItem>
    <ListItem button style={{marginTop:10}} component={ Link } activeClassName="highlighted" to="/AddDepartments">
      <ListItemIcon>
        <DomainIcon />
      </ListItemIcon>
      <ListItemText primary="Add Department" />
      {/* <Link to="AddDepartments" style={{ color:'#2E2E2E' , fontSize:17 , textDecoration: 'none'}}>Add Department</Link> */}
    </ListItem>
    <ListItem button style={{marginTop:10}} component={ Link } activeClassName="highlighted" to="/TrespassingLog">
      <ListItemIcon>
        <DirectionsRunIcon />
      </ListItemIcon>
      <ListItemText primary="Trespassers" />
      {/* <Link to="TrespassingLog" style={{ color:'#2E2E2E' , fontSize:17 , textDecoration: 'none'}}>Trespassers</Link> */}
    </ListItem>
    <ListItem button style={{marginTop:10}} component={ Link } activeClassName="highlighted" to="/UserList">
      <ListItemIcon>
        <ListAltTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Users List" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button style={{marginTop:10}} component={ Link } activeClassName="highlighted" to="/AttendanceLog">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Attendance" />
      {/* <Link to="AttendanceLog" style={{ color:'#2E2E2E' , fontSize:17 , textDecoration: 'none'}}>Attendance</Link> */}
    </ListItem>
    
  </div>
);