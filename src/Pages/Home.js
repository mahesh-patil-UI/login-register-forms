import React from 'react';
import {useNavigate } from 'react-router-dom';
import Crudoperations from './Crudoperations';

const Home = () => {
    const navigate = useNavigate();
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogout = ()=>{
        localStorage.removeItem("loggedin");
        navigate("/login");
    }
  return (
    <><div style={{ textAlign: 'center' }}>Welcome - {userName.name}
      <button onClick={handleLogout} type="button" className='btn btn-primary'>Logout</button>
    </div><>
        <Crudoperations />
      </></>
  )
}

export default Home