import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:3001/signuppage',{name,email,password})
        .then(result=>{console.log("Result",result);
            navigate('/login');
        })
        .catch(err=>console.log(err))
    }
  return ( 
    <div className="d-flex justify-content-center align-item-center vh-100 bg-black">
        <div className="bg-black p-3 rounded w-25 border-white" >
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Name" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) =>setName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" autoComplete="off" name="email" className="form-control rounded-0" onChange={(e) =>setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="email" className="form-control rounded-0"onChange={(e) =>setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
                </form>
                <p>Already have an account</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
        </div>
      
    </div>
  );
};

export default SignUp;
