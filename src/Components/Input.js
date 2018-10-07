import React from 'react';
export default class Input extends React.Component {
  constructor(props){
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    return <div className='Input'>
              <input type={ this.props.type } onChange={this.handleOnChange} name={ this.props.name } placeholder={ this.props.placeholder } required />
              <label htmlFor={ this.props.name } ></label>
           </div>
  }
}