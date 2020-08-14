import React, { Component } from 'react';

class Useritem extends Component {
  onClick = () => {
    // alert('are you sure, you want to delete this user');
    this.props.onDelete(this.props.value.id);
  };

  render() {
    const { name, id, age, designation } = this.props.value;

    return (
      <div className="card mt-2">
        <div className="row">
          <div className="col-10">
            <div className="card-body">
              <h3>Id : {id}</h3>
              <h4>Name : {name}</h4>
              <div>Age : {age}</div>
              <div>Designation- : {designation}</div>
            </div>
          </div>
          <div className="col 2">
            <i
              className="fas fa-trash-alt text-danger"
              style={point}
              onClick={this.onClick}
            />
            <i className="fas fa-user-edit ml-2" style={point} />
          </div>
        </div>
      </div>
    );
  }
}
const point = { cursor: 'pointer' };

export default Useritem;
