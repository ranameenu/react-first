import React, { Component } from 'react';

class AddUser extends Component {
  state = {
    name: '',
    age: '',
    designation: '',
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeAge = (e) => {
    this.setState({ age: e.target.value });
  };

  onChangeDesignation = (e) => {
    this.setState({ designation: e.target.value });
  };

  /* onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }; */

  render() {
    return (
      <div>
        <form className="w-50">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              className="form-control"
              name="designation"
              value={this.state.designation}
              onChange={this.onChangeDesignation}
            />
          </div>
          <input
            type="submit"
            value="Add User"
            className="btn btn-success mt-2"
          />
        </form>
      </div>
    );
  }
}

export default AddUser;
