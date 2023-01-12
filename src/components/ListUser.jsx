import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ListUser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  function getUsers() {
    axios.get('http://localhost:8888/api/users').then(function(response){
      console.log(response.data);
      setUsers(response.data);
    });
  }
  
  const deleteUser = (id) => {
    axios.delete(`http://localhost:8888/api/user/${id}/delete`).then(function(response){
      console.log(response.data);
      getUsers();
      alert("The user has been deleted succesfully!")
    })
  }

  return (
    <div className="row">
      <div className="col-12">
        <center>
          <br />
          <h1>List Users</h1>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, key) =>
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <Link to={`user/${user.id}/edit`} className="btn btn-primary">Edit</Link>&nbsp;&nbsp;
                    <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  )
}

export default ListUser;