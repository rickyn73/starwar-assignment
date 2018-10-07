import React from 'react';
import Input from './Input';
export default class Modal extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.getUserName = this.getUserName.bind(this);
    this.getPassword = this.getPassword.bind(this);
    this.state = {
        userName: '',
        password: ''
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.userName, this.state.password);    
  }

  getUserName(userName) {
    this.setState({userName});
  }

  
  getPassword(password) {
    this.setState({password});
  }
  render() {
    return <div className='Modal'>
              <div className="logo">
                <i className="fa fa-star-o" aria-hidden="true"></i> 
                <span> War </span>
              </div>
              <form onSubmit= { this.onSubmit }>
                <Input type='text' name='username' onChange={this.getUserName} placeholder='username' />
                <Input type='password' name='password' onChange={this.getPassword} placeholder='password' />
                <button> Sign In</button>
              </form>
           </div>
  }
}