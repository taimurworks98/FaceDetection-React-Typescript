 import CssBaseline from '@material-ui/core/CssBaseline';
 import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
 import React, { useState, useEffect } from 'react'
 import Attendance from '../admin/Attendance';
 import Paper from '@material-ui/core/Paper';
 import { AppbarAttendance } from '../../components/Appbar';
 import Copyright from '../../components/Copyright';
 import Container from '@material-ui/core/Container';
 import Box from '@material-ui/core/Box';
 import Grid from '@material-ui/core/Grid';


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
     paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
      },
    
   }),
 );


 export default function AttendanceLog(props:any) {
  const classes = useStyles(); 

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
                
                <Attendance />

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
