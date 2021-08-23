import React from "react";
import { AppbarAttendance } from '../../components/Appbar';

// interface AddContact {
//     addContactHandler?: any;
//     History?: any;
//   }
  
//   interface AddContact {
//   }

class AddAttendance extends React.Component {
  state = {
    name: "",
    department: "",
    role: "",
    date: "",
    attendance: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.department === "" || this.state.role === "" || this.state.date === "" || this.state.attendance === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addAttendanceHandler(this.state);
    this.setState({ name: "", department: "", role: "", date: "", attendance: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main" style={{marginLeft:'20%', marginTop:'7%'}}>
        <AppbarAttendance/>
        <form className="ui form" onSubmit={this.add}>
            
            <div className="field">
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
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddAttendance;
