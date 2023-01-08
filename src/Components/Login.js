import React, {useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password){
            localStorage.setItem("loggedin",true);
            navigate("/");
        }else{
            alert("wrong email and password")
        }
    };
  return (
    <div className="form">
	<div>
		<h1>Login</h1>
	</div>

	<div className='wrapper'>
        <form onSubmit={handleLogin} className="myForm">
            {/* Labels and inputs for form data */}
            
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
            <button onClick={handleLogin} className="btn btn-primary" type="submit">
            Submit
            </button>
            <p>Dont have an account?
                <Link to="/register"><u>Register Here</u></Link>
            </p>
        </form>
    </div>
	</div>
  )
}

export default Login