import React, { Component } from 'react';
import Axios from 'axios';

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

  onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      age: this.state.age,
      designation: this.state.designation,
    };

    await Axios.post('http://localhost:5000/users', user);

    this.props.history.push('/users');
  };

  render() {
    return (
      <div>
        <form className="w-50 " onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChangeName}
              required
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
              required
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
              required
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
