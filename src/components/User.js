import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';
import axios from 'axios';
class User extends Component {
  state={
    isVisible : false
  }
  static defaultProps={
    name:"Default Name",
    salary:"Default Salary",
    department:"Default Department",  
  }
onClickEvent=(e)=>{
  this.setState({
    isVisible: !this.state.isVisible
  })
}
onDeleteUser= async (dispatch,e)=>{
  const{id}=this.props;
  //consumer dispatch
  await axios.delete(`http://localhost:3004/users/${id}`);
  dispatch({type:"DELETE_USER", payload: id});
}
// componentWillUnmount(){
//   console.log("unmount")
// }
render() {
    const {name,department,salary}=this.props;
    const {isVisible}=this.state;
    return (
      <UserConsumer>
        {
          value=>{
            const {dispatch}=value;
            return (
              <div className="col-md-8 mb-4">
                <div className="card" style={isVisible ? {backgroundColor: "#62848d", color:"white"} : null}>
                  <div className="card-header d-flex justify-content-between" style={{cursor: "pointer"}}>
                    <h4 className='d-inline' onClick={this.onClickEvent}> {name}</h4>
                    <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" >Delete</i>
                  </div>
                  {
                    isVisible? <div className="card-body" >
                    <p className="card-text">Maaş: {salary}</p>
                    <p className="card-text">Departman: {department}</p>
                  </div> : null
                  }                  
                </div>                    
              </div>
            )

          }
        }
      </UserConsumer>
    )

  }
}
User.propTypes={
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired,
}
export default User;