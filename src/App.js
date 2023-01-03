import React from 'react';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import ProtectedRoute from './ProtectedRoute';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute/>}>
          <Route path='/' element={<Home />}/>
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App