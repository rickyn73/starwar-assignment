import React from 'react';
import Input from './Input';
export default class Modal extends React.Component {
  render() {
    return <div className='Modal'>
              <Logo />
              <form onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
              </form>
           </div>
  }
}