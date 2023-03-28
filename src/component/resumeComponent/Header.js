// import React from 'react'

// export default function header({editMode}) {

//   if(editMode){
//     return (
//       <div className="header">
//           <input type="text" placeholder='YOUR NAME' className='name'/>
//           <br/>
//           <input type="text" placeholder='YOUR ADDRESS' className='address'/>
//           <input type="text" placeholder='YOUR PHONE NUMBER' className='phone'/>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      phone: '',
    }
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
      address: this.state.address,
      phone: this.state.phone,
    })
    console.log(this.state.name);
  }

  onAddressChange = (e) => {
    this.setState({
      name: this.state.name,
      address: e.target.value,
      phone: this.state.phone,
    })
  }

  onPhoneChange = (e) => {
    this.setState({
      name: this.state.name,
      address: this.state.address,
      phone: e.target.value,
    })
  }

  render() { 
    const {name,  address, phone} = this.state;
    if(this.props.editMode){
      return ( 
        <div className="header">
          <input type="text" placeholder='YOUR NAME' onChange={this.onNameChange} value={name} className='name'/>
          <br/>
          <input type="text" placeholder='YOUR ADDRESS' onChange={this.onAddressChange} value={address} className='address'/>
          <input type="text" placeholder='YOUR PHONE NUMBER' onChange={this.onPhoneChange} value={phone} className='phone'/>
        </div>
      );
    } else {
      return (
        <div className="header">
            <p className='addedName'> {name} </p>
            <p className='addedAddress'> {address} </p>
            <p className='addedPhone'> {phone} </p>
        </div>   
      )
    }
  }
}
 
export default Header;
