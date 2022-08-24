import React, { useState } from 'react';
import './User.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const User = (props) => {
const {name,email,phone,picture} = props.user;
const fullName = name.first+name.last;
const [mobile,setMobile]=useState("");
const setPhone = () => setMobile(phone);
const addMember = props.addMember;
  return (
    <div className='main'>
      <div className="container">
        <div className='img-container'>
          <img src={picture.large} alt=""/>
        </div>
        <div className='data-container'>
        <h3>Name : {fullName}</h3> 
        <p>Email: {email}</p>
        <h5>Learn about me</h5>
        <p>Phone: {mobile}</p>
        <Button onClick={setPhone} variant="primary">Show Number</Button>
        <Button variant='warning' style={{marginLeft:"10px"} }onClick={() => addMember(fullName)} >Add me</Button>
        </div>
      </div>
      
      
    </div>
  );
};

export default User;