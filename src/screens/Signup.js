import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", address: "", password: ""})
  let [address, setAddress] = useState("");
  let navigate = useNavigate()

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isEmptyField = false;
  const emptyFields = []; // To store names of empty fields

  if (!credentials.name) {
    isEmptyField = true;
    emptyFields.push("Name");
  }

  if (!credentials.email) {
    isEmptyField = true;
    emptyFields.push("Email");
  }

  if (!credentials.address) {
    isEmptyField = true;
    emptyFields.push("Address");
  }

  if (!credentials.password) {
    isEmptyField = true;
    emptyFields.push("Password");
  }

  if (isEmptyField) {
    const errorMessage = `Please fill in the following required fields:\n- ${emptyFields.join('\n- ')}`;
    alert(errorMessage);
    return; // Prevent further execution if fields are empty
  }
    const response = await fetch("http://localhost:5000/api/createuser", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, address: credentials.address , password: credentials.password})

    });
    const json = await response.json()
    console.log(json);
    if (json.success) {
      //save the auth toke to local storage and redirect
      // localStorage.setItem('token', json.authToken)
      navigate("/login")

    }
    else {
      alert("Enter Valid Credentials")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>

        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" name='address'  value={credentials.address} onChange={onChange} aria-describedby="AddressHelp" />
            </div>
           
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
  )
}