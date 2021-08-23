import React , {useState} from 'react';
import * as ReactDOM from 'react-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Test1 from '../../components/video/test1.mp4'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange, yellow } from '@material-ui/core/colors';
import axios from 'axios'
import './login.css'


function Copyright() {
  return (
    <Typography variant="body2" color="textPrimary" align="center" style={{color:'white',textAlign:'center'}}>
      {'Copyright © '}
      <Link color="textPrimary" href="https://utorsols.com/" style={{color:'white',textAlign:'center'}}>
        Utor Solutions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: orange[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '##ffffff',
    },
    text:{
      primary: "#ffffff"
    }
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
}));

export default function SignIn() {
  // const form = new FormData();

  const onCreateUser = (e: { preventDefault: () => void; })=> {
    e.preventDefault()

    console.log('testing login',email,password);
    
    axios.post('/https://terrible-insect-69.loca.lt/api/auth/login', { params :{
      email: email,
      password: password
    }})
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
        <video 
          autoPlay
          loop
          muted
          style={{
            position:'absolute',
            width:'100%',
            left:'50%',
            top:'50%',
            height:'100%',
            objectFit:'cover',
            transform:'translate(-50%,-50%)',
            zIndex:-1
          }}
          >
          <source src={Test1} type='video/mp4'/>
        </video>
        </div>
        <ThemeProvider theme={theme}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        
        
        
        <form className={classes.form} noValidate onSubmit={onCreateUser}>
        <Typography component="h1" variant="h4" color="textPrimary" style={{color:'white',textAlign:'center'}}>
          Sign in
        </Typography>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            color="primary"
            style={{color:'white',textAlign:'center'}}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color="primary"
            style={{color:'white',textAlign:'center'}}
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            color="primary"
            style={{color:'white',textAlign:'center'}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
        </ThemeProvider>
      </div>
      <Box mt={8}>
        <Copyright />
        <p style={{color:'white',textAlign:'center'}}>Facial Recognition AI</p>
      </Box>
      
    </Container>
  );
}
