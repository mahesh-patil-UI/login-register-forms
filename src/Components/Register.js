import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    });

// to store value in localstorage
const handleSubmit = (e) =>{
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
}
  return (
    <div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	<div className='wrapper'>
        <form onSubmit={handleSubmit} className="myForm">
            {/* Labels and inputs for form data */}
            <label className="label">Name</label>
            <input name="name" value={input.name} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name] : e.target.value})} className="input"
            type="text" />

            <label className="label">Email</label>
            <input name="email" value={input.email} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name] : e.target.value})} className="input"
            type="email" />

            <label className="label">Password</label>
            <input name="password" value={input.password} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name] : e.target.value})} className="input"
            type="password" />
            <br/>
            <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Submit
            </button>
            <p>already have an account?
                <Link to="/login"><u>Login Here</u></Link>
            </p>
        </form>
    </div>
	</div>
  )
}

export default Register