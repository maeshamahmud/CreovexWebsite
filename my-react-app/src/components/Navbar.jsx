import React from "react";
import Navbar from 'react-bootstrap/Navbar';

const NavbarTop = () => {
  return (
    <div>
    <Navbar className="p-3"
            style={{ background:"lightgray"}}>
        <Navbar.Brand href="#home"
                      style={{color: "red"}}>
                        Creovex
        </Navbar.Brand>
        <Navbar.Brand href="#home"
                      style={{color: "red"}}>
            Home
        </Navbar.Brand>
        <Navbar.Brand href="#home"
                      style={{color: "red"}}>
            Prices
        </Navbar.Brand>
    </Navbar>
    <br />
</div>


  );
};

export default NavbarTop;

