import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Permissions from './pages/admin/Permissions';
import AdminDash from './pages/admin/AdminDash';
import UserRegistration from './pages/admin/UserRegistration';
import TrespassingLog from './pages/trespassing/TrespassingLog';
import AddDepartments from './pages/departments/AddDepartments';
import AttendanceLog from './pages/attendance/AttendanceLog';
import UserList from './pages/users/UserList';
import AddAttendance from './pages/attendance/addAttendance';
import EditAttendance from './pages/attendance/editAttendance';


function App() {
  return (
    <Router>
            <Switch>
              <Route path='/' exact component={AdminDash} />
              <Route path='/Login'><Login/></Route>
              <Route path='/AddDepartments'><AddDepartments/></Route>
              <Route path='/AttendanceLog'><AttendanceLog/></Route>
              <Route path='/TrespassingLog'><TrespassingLog/></Route>
              <Route path='/UserRegistration' component={UserRegistration}/>
              <Route path='/UserList' component={UserList}/>
              <Route path='/AddAttendance' component={AddAttendance}/>
              <Route path='/EditAttendance' component={EditAttendance}/>
            </Switch>
    </Router>
    // <div className="App">
    //   {/* <header className="App-header">
    //   <p>Hi</p> */}
    //   {/* <Login/> */}
    //   {/* <UserRegistration /> */}
    //   {/* <TrespassingLog /> */}
    //   {/* <AttendanceLog /> */}
    //   {/* <AdminDash /> */}
    //   {/* <Test/> */}
    //   {/* <User/> */}
    // </div>
  );
}

export default App;