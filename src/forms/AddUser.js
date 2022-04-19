import React, { Component } from 'react';
import posed from 'react-pose';
// import { v4 as uuidv4 } from 'uuid';
import UserConsumer from '../context';
import axios from 'axios';
const Animation=posed.div({
  visible:{
    opacity:1,
    applyAtStart:{
      display : "block"
    }
  },
  hidden:{
    opacity:0,
    applyAtEnd:{
      display:"none"
    }
  }
});
class AddUser extends Component {
  state={
    visible:false,
    name:"",
    department:"",
    salary:"",
  }
  changeVisibility=(e)=>{
    this.setState({
      visible : !this.state.visible 
    })
  }
  changeInput=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })    
  }
  addUser= async (dispatch,e)=>{
    e.preventDefault();
    const {name,department,salary}= this.state;
    const newUser={
      // id: uuidv4(), db.json kendi zaten bir id atıyormuş o yüzdenn gerek kalmadı
      name : name,
      salary: salary,
      department: department
    };
    const response = await axios.post("http://localhost:3004/users",newUser);
    dispatch({type:"ADD_USER", payload: response.data});
    console.log(newUser);
  }
  render() {
    const {visible,name,salary,department}=this.state;
    return <UserConsumer>
      {
        value=>{
          const {dispatch}=value;
          return (
            <div className='col-md-8 mb-4'>
              <button onClick={this.changeVisibility} className="btn btn-secondary btn-block mb-2">{visible ? "Hide Adding Form" : "Show Adding Form" }</button>
              <Animation pose={visible? "visible" : "hidden"}> 
                <div className='card'>
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this,dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        name='name'
                        id='id'
                        placeholder='Enter Name'
                        className='form-control mb-4'
                        value={name}
                        onChange={this.changeInput}
                        />
                        <label htmlFor="department">Department</label>
                        <input 
                        type="text" 
                        name='department'
                        id='id'
                        placeholder='Enter Department'
                        className='form-control  mb-4'                  
                        value={department}
                        onChange={this.changeInput}
                        />
                        <label htmlFor="salary">Salary</label>
                        <input 
                        type="text" 
                        name='salary'
                        id='id'
                        placeholder='Enter Salary'
                        className='form-control mb-4'                  
                        value={salary}
                        onChange={this.changeInput}
      
                        />
                      </div>
                      <button className='btn btn-warning btn-block' type='submit'>Submit</button>
                    </form>
                  </div>
                </div>
                </Animation> 
            </div>
          )
        }
      }
    </UserConsumer>
    
    
    
  }
}
export default AddUser;