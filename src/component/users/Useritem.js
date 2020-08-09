import React from 'react';

const Useritem = (props) => {
  const { id, name, age } = props.value;
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h4>Name : {name}</h4>
        <div>User-Id : {id}</div>
        <div>Age : {age}</div>
      </div>
    </div>
  );
};

export default Useritem;
