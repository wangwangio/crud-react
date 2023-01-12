import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    getUser();
  }, []);

  function getUser(id) {
    axios.get(`http://localhost:8888/api/user/${id}`).then(function(response){
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name] : value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put(`http://localhost:8888/api/user/${id}/edit`, inputs).then(function(response){
      console.log(response.data);
      alert("The user has been updated succesfully!")
      navigate('/');
    });
  }

  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">
      <h1>Edit user</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Name</label>
          <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input value={inputs.email} type="text" className="form-control" name="email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="">Mobile</label>
          <input value={inputs.mobile} type="text" className="form-control" name="mobile" onChange={handleChange} />
        </div>
        <button type="submit" name="add" className="btn btn-primary">Save</button>
      </form>
      </div>
      <div className="col-2"></div>
    </div>  
  )
}

export default EditUser;