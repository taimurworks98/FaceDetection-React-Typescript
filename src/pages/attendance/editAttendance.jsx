import React from "react";
import { AppbarAttendance } from '../../components/Appbar';

class EditAttendance extends React.Component {
  constructor(props) {
    super(props);
    const { name, department, role, date, attendance } = props.location.state.attendance;
    this.state = {
      name,
      department,
      role,
      date,
      attendance,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.department === "" || this.state.role === "" || this.state.date === "" || this.state.attendance === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateAttendanceHandler(this.state);
    this.setState({ name: "", department: "", role: "", date: "", attendance: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <AppbarAttendance/>
        <form className="ui form" onSubmit={this.update}>
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
          <button className="ui button blue">UPDATE</button>
        </form>
      </div>
    );
  }
}

export default EditAttendance;