import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class editUser extends Component {
  state = {
    name: "",
    age: "",
    designation: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    const user = res.data;

    this.setState({
      name: user.name,
      age: user.age,
      designation: user.designation,
    });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      age: this.state.age,
      designation: this.state.designation,
    };
    const id = this.props.match.params.id;
    await axios.put(`http://localhost:5000/users/${id}`, user);
    this.props.history.push("/users");
  };

  render() {
    return (
      <div>
        <div className="row mt-2">
          <div className="col-5 ">
            <h3>EditUser</h3>
          </div>
          <div className="col-5 ">
            <Link to="/users" className="btn btn-success float-right">
              Back
            </Link>
          </div>
        </div>
        <form className="w-50 " onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
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
              onChange={this.onChange}
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
              onChange={this.onChange}
              required
            />
          </div>
          <input
            type="submit"
            value="Update User"
            className="btn btn-success mt-2"
          />
        </form>
      </div>
    );
  }
}

export default editUser;
