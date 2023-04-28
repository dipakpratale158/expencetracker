import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";



const Header = () => {



  
  
  return (
    <div style={{backgroundColor: 'beige'}}>
      <Nav className="justify-content-center" activeKey="/home">
      <div style={{margin:'20px'}}><Link to="/">SignUp</Link></div>
    

      </Nav>
       </div>
  )
};

export default Header;