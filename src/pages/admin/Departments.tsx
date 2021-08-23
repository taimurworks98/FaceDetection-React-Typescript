import React from 'react';
// import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function preventDefault(event:any) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Departments() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Departments</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        Flutter
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        .Net
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        MERN
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        C#/Python
      </Typography>
      <div>
        <Link to="AddDepartments"  style={{ color:'primary' , fontSize:13 , textDecoration: 'none'}}>
          Add Department
        </Link>
      </div>
    </React.Fragment>
  );
}