import React,{Component} from 'react';
import './App.css';
import Navbar from "./layouts/Navbar";
import Users from './components/Users';
import AddUser from './forms/AddUser';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Contributes from './pages/Contributes';
class App extends Component{ 

  render(){
  return (
    <BrowserRouter>
      <div className='container'>
      <Navbar title="User App"/>
      <hr />
      <Routes>
        <Route exact path="/" element={<Users/>}></Route>
        <Route exact path="/add" element={<AddUser/>}></Route>
        <Route exact path="/github" element={<Contributes/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}
}

export default App;
